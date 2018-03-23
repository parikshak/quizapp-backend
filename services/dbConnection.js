'use strict'

var mongoose = require('mongoose');
var mongoConfig = require('../config/mongoDb.json');

var db;

exports.DBConnectMongoose = function() {
  return new Promise(function(resolve, reject) {
    if (db) {
      return db;
    }

    mongoose.Promise = global.Promise;
    const mongoDBLocation = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.name}`

    mongoose.connect(mongoDBLocation)
    .then(() => {
      console.log('mongo connection created');
      resolve(db);
    })
    .catch(err => {
      console.log('error creating db connection: ' + err);
      reject(db);
    });
  });
};

exports.getDBConnection = function () {
    if (db) {
        return db;
    }

    console.log('There is no mongo connection');
    return null;
}
