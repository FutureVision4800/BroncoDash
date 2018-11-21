const express = require('express');
const router = express.Router();
const app = require('../server');


let db; // global variable to hold the connection
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://brayalad:Guadalajara1@ds245523.mlab.com:45523/broncorush_data";
const dbName = ("broncorush_data");

// MongoDB Connection 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    if(err) throw err;

    db = client.db(dbName); // once connected, assign the connection to the global variable
    console.log("Database Connection Successfull from routes index");
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bronco Rush' });
});

router.get('/database/getClubs', res => {
    db.collection("BroncoRush_Clubs").find({}).toArray((err, result) => {
      if (err) throw err;

     // console.log(result);
      res.json(result);
  });
});

router.post('/database/getQweryClubs', (req, res) => {

  var query = { category: req.body.category };

  db.collection("BroncoRush_Clubs").find(query).toArray((err, result) => {
    if (err) throw err;

   // console.log(result);
    res.json(result);
  });
  
});

router.get('/api/hello', (req, res) => {
  res.send({hello: 'hello from the backend'});
});

module.exports = router;
