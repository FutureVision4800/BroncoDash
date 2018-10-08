const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/bryan', (req, res, next) => {
  res.render('index', { title: 'Brian w/ a Y' });
});

router.get('/BroncoProject', (req, res, next) => {
  res.render('index', { title: 'Bronco Dash' });
});

module.exports = router;
