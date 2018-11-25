const express = require('express');
const router = express.Router();
const app = require('../server');


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



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user account*/
router.get('/getAllUsers', (req, res, next) => {
  db.collection("users").find({}).toArray((err,result) => {
    if(err) throw err;
//    console.log(result);
    res.json(result);
  })
});

router.post('/getInfo', function(req, res, next) {

  var query = { username: req.body.username };


  db.collection("users").find(query,
      {projection:{_id: 0}}).toArray(function(err, result) {
    if (err) throw err;

    
   // console.log(result);
    res.json(result);
  });
  
});

router.post('getUserClubs', (req, res) => {

  var query = { username: req.body.username };

  db.collection("users").findOne(query, (err, result) => {
    if(err) throw err;

    var userClubs = result.clubs;
    console.log(userClubs);

    res.json(userClubs);

  });

});


router.post('/updateUserClub', (req, res) => {

  var query = { username: req.body.username };
  var newClub = { $addToSet: {clubs: req.body.addClub} };
  console.log("Update user club query: ", query);
  console.log("Update user new Club: ",newClub);

  db.collection("users").updateOne(query, newClub, (err, result) => {
    if(err) console.log(err);
    console.log("club added");
    
    res.json(result);
  });

});

router.post('/removeUserClub', (req, res) => {

  var query = { username: req.body.username };
  var removedClub = { $pull: {clubs: req.body.removedClub} };
  console.log("Remove user club query: ", query);
  console.log("Remove user new Club: ",removedClub);

  db.collection("users").updateOne(query, removedClub, (err, result) => {
    if(err) console.log(err);
    console.log("Club Removed");

    res.json(result);

  });

});




module.exports = router;
