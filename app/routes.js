var userController = require('./v1/controller/userController');
var quizController = require('./v1/controller/quizController');

exports.assignRoutes = function (app) {
  app.get('/api/v1/', userController.login);
  app.get('/api/v1/loadQuestions', quizController.loadQuestions);

  app.post('/api/v1/login', userController.login);

}
