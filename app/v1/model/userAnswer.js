var mongoose = require('mongoose');

var dbConnection = require('./services/dbConnection');

var db = dbConnection.getDBConnection();

var UserAnswerSchema = new mongoose.Schema({
  submissionId: String,
  questionId: String,
  questionOptionId: String,
});

var UserAnswer = mongoose.model('userAnswer', UserAnswerSchema);

module.exports = UserAnswer;
