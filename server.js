var express = require('express');
var helmet = require('helmet');
var bodyparser = require('body-parser');
var dbConnection = require('./services/dbConnection');
var app = express();
const Keycloak = require('keycloak-connect');
const session = require('express-session');

//session
app.use(session({
  secret:'we243fnkjsdhcjksd',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });
var userController = require('./app/v1/controller/userController');
var quizController = require('./app/v1/controller/quizController');
app.use(keycloak.middleware());

//route protected with Keycloak
app.get('/', keycloak.protect(), function(req, res){
  res.json('Welcome to Backend App.Please login');
});
app.get('/api/v1/', userController.login); // To test this url is unprotected
app.get('/api/v1/loadQuestionst', quizController.loadQuestions);
app.get('/api/v1/loadQuestions',keycloak.protect(),  quizController.loadQuestions);

app.post('/api/v1/login', keycloak.protect(), userController.login);

//route protected with Keycloak
app.get('/test', keycloak.protect(), function(req, res){
  res.json({title:'Test of the test'});
});
app.use( keycloak.middleware( { logout: '/logout'} ));



dbConnection.DBConnectMongoose().then(() => {
  var routes = require('./app/routes');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '3mb'}));

routes.assignRoutes(app);

app.listen(3000);

console.log('Server listening on port 3000');
})
.catch(err => {
  console.log('Error: ' + err)
})
