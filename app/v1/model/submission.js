var mongoose = require('mongoose');

var dbConnection = require('./services/dbConnection');

var db = dbConnection.getDBConnection();

var SubmissionSchema = new mongoose.Schema({
  userId: String
});

var Submission = mongoose.model('submission', SubmissionSchema);

module.exports = Submission;
