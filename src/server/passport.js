const app = require('./app.js');

const flash = require('connect-flash');
const crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./lib/dbconn');
const sess = require('express-session');
const Store = require('express-session').Store;
const BetterMemoryStore = require('session-memory-store')(sess);

/* Passport password verification*/

//Express session store and experation
const store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

 app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store:  store,
    resave: true,
    saveUninitialized: true
}));

//Passport Initialization
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Passport JS login process
passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //passback entire req to call back
} , function (req, username, password, done){

      if(!username || !password ) { 
        return done(null, false, req.flash('message','All fields are required.')); 
      }

      var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
      connection.query("select * from tbl_users where username = ?", [username], function(err, rows){
          console.log(err); console.log(rows);

        if (err) 
        return done(req.flash('message',err));

        if(!rows.length){ return done(null, false, req.flash('message','Invalid username or password.')); }
        salt = salt+''+password;
        var encPassword = crypto.createHash('sha1').update(salt).digest('hex');

        var dbPassword  = rows[0].password;
        if(!(dbPassword == encPassword)){
            return done(null, false, req.flash('message','Invalid username or password.'));
         }
        return done(null, rows[0]);
      });
    }
));

//Serialize and Deserialize user info
passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  connection.query("select * from tbl_users where id = "+ id, function (err, rows){
      done(err, rows[0]);
  });
});

//Signin route for GET method in app.js
app.get('/signin', function(req, res){

  res.render('login/index',{'message' :req.flash('message')});

});

//Sign in route for POST method
app.post("/signin", passport.authenticate('local', {

  successRedirect: '/profile',

  failureRedirect: '/signin',

  failureFlash: true

}), function(req, res, info){

  res.render('login/index',{'message' :req.flash('message')});

});