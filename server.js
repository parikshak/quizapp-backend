var express = require('express');
var helmet = require('helmet');
var bodyparser = require('body-parser');

var dbConnection = require('./services/dbConnection');

var app = express()

app.use(helmet())

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
