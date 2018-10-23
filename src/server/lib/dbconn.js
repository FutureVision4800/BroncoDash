const mysql        = require('mysql');

const connection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : "localhost",
  user     : "root",
  password : "Guadalajara#1",
  database : "BroncoRushDB"
});

module.exports = connection;