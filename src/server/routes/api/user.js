const express = require('express');
const router = express.Router();
const User = require('../../database/models/user');
const passport = require('../../passport');
const app = require('../../server');

router.post('/signup', (req, res) => {
    console.log('user signup');

    const { name, username, email, password } = req.body;
    //ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if(err){
            console.log('User.js post error: ', err);
        }
        else if(user){
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                name: name,
                email: email,
                clubs: []
            });
            newUser.save((err, savedUser) => {
                if(err) return res.json(err);
                res.json(savedUser);
            })
        }
    });

});

router.post('/login', function(req, res, next) {
    console.log('routes/api/user.js, login, req.body: ');
    console.log(req.body);
    next();
    },
    passport.authenticate('local'), 
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,  
            userFullName: req.user.name
        };
        res.send(userInfo);
    }
);

router.get('/getCurrentUser', (req, res, next) => {
    console.log('====user!!====');
    console.log(req.user);
    console.log(req.user.name);

    if(req.user){
       res.json({ user: req.user }); 
    }
    else{
        res.json({ user: null });
    }
});

router.post('/logout', (req, res) => {
    if(req.user){
        req.logout();
        res.send({ msg: 'logging out' });
    }
    else{
        res.send({ msg: 'no user to log out' });
    }
});


module.exports = router;