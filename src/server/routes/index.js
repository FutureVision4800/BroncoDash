const express = require('express');
const router = express.Router();


/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    connection.query('SELECT * FROM employees', (err,rows) => {
        if(err) throw err;

        console.log('Data received from Db:\n');
        console.log(rows);
    });
});

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydb'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});
/*
//how to create data
const employee = { name: 'Winnie', location: 'Australia' };
connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
    if(!err) throw err;

    console.log('Last insert ID:'+ res.insertId);
});

//how to update location
connection.query(
    'UPDATE employees SET location = ? Where ID = ?',
    ['South Africa', 5],
    (err, result) => {
        if (!err) throw err;

        console.log(`Changed ${result.changedRows} row(s)`);
    }
);
//how to delete
connection.query(
    'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
        if (!err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);
*/

module.exports = router;
