const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user account*/
router.get('/andrea', function(req, res, next) {
  res.send('Hello Andrea');
});

module.exports = router;
