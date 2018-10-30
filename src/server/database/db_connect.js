var async = require('async');

var MongoClient = require('mongodb').MongoClient;

// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.

//var PROD_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>";
//var MKTG_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>";

const USERS_URI = 'mongodb://localhost:27017';

var databases = {
    users: async.apply(MongoClient.connect, USERS_URI)
};
module.exports = function(cb) {
    async.parallel(databases, cb);
};