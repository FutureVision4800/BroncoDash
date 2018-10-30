// Set up mongoose connection
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://brayalad:Guadalajara1@ds245523.mlab.com:45523/broncorush_data';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));