var mongoose = require('mongoose');

var dbConnection = require('./services/dbConnection');

var db = db_tools.getDBConnection();

var Options = new mongoose.Schema({
  title: String,
  isAnswer: Boolean
});

var QuestionSchema = new mongoose.Schema({
  title: String,
  questionPartId: String,
  userId: String,
  options: [Options]
});

var Question = mongoose.model('question', QuestionSchema);

module.exports = Question;
