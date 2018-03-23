var mongoose = require('mongoose');

var dbConnection = require('./services/dbConnection');

var db = db_tools.getDBConnection();

var QuestionPartSchema = new mongoose.Schema({
  title: String,
  userId: String
});

var QuestionPart = mongoose.model('questionPart', QuestionPartSchema);

module.exports = QuestionPart;
