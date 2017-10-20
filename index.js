var express = require('express');
var bodyparser = require('body-parser');
var passport = require ('passport');
var FacebookStrategy = require ('passport-facebook');
var config = require('./configs/config');
var facebook = require('./configs/passport');
var google = require ('./configs/passport');
var twitter = require ('./configs/passport');
var app = express();

var port = 3000;

app.route('/')
    .get(function(req,res){
        res.send('Hello dento')
    });

//redirect to facebook api
app.get('/auth/facebook', passport.authenticate('facebook',{scope:['email']}));

//Redirect back to the app after authentication
app.get('/auth/facebook/callback',
    passport.authenticate('facebook',{successRedirect:'/home',
                                      failureRedirect:'/'}));


//Google
app.get('/auth/google', passport.authenticate('google',{scope:['profile','email']}));
app.get('/auth/google/callback',
passport.authenticate('google',{successRedirect:'/',
                                  failureRedirect:'/login'}));

//Twitter
app.get('/auth/twitter', passport.authenticate('twitter',{scope:['profile','email']}));
app.get('/auth/twitter/callback',
passport.authenticate('twitter',{successRedirect:'/',
                                  failureRedirect:'/login'}));

//Github
app.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
passport.authenticate('github', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});
app.listen(port);
console.log("Server running on port "+ port);
