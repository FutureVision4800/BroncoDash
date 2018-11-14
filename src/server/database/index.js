//Connect to Mongo Database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://brayalad:Guadalajara1@ds245523.mlab.com:45523/broncorush_data";

mongoose.connect(uri).then(
    () => {
        console.log("Connected to MongoDB using mongoose");
    },
    err =>{
        console.log("Error connecting to Mongo using mongoose: ");
        console.log(err);
    }
);

module.exports = mongoose.connection;