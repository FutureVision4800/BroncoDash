const express = require('express');
const router = express.Router();

/*
let db; // global variable to hold the connection
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://brayalad:Guadalajara1@ds245523.mlab.com:45523/broncorush_data";
const dbName = ("broncorush_data");

//Connecting to MongoDB Database
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    if(err) throw err;

    db = client.db(dbName); // once connected, assign the connection to the global variable
    console.log("Database Connection Successfull from routes user");
});
/*


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user account*/
router.get('/andrea', function(req, res, next) {
  res.send('Hello Andrea');
});


router.get('/getInfo', function(req, res, next) {

  var query = { userName: "andyu4ia" };


  db.collection("BroncoRush_Users").find(query,
      {projection:{_id: 0}}).toArray(function(err, result) {
    if (err) throw err;

    
   // console.log(result);
    res.json(result);
  });
  
});

router.get('/api/hello', (req, res) => {
res.send({hello: 'hello from the backend'});
});



module.exports = router;
