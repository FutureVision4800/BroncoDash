const express = require('express');
const router = express.Router();

let db; // global variable to hold the connection
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://brayalad:Guadalajara1@ds245523.mlab.com:45523/broncorush_data";
const dbName = ("broncorush_data");

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    if(err) throw err;

    db = client.db(dbName); // once connected, assign the connection to the global variable
    console.log("Database Connection Successfull");
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bronco Rush' });
});

router.get('/database', function(req, res, next) {
    db.collection("BroncoRush_Users").find({},
        {projection:{_id: 0}}).toArray(function(err, result) {
      if (err) throw err;

      console.log(result);
  });
});

router.get('/api/hello', (req, res) => {
  res.send({hello: 'hello from the backend'});
});

module.exports = router;
