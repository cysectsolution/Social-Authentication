var express = require('express');
var bodyparser = require('body-parser');
var passport = require ('passport');
var FacebookStrategy = require ('passport-facebook');
var config = require('./configs/config');
var facebook = require('./configs/passport');
var app = express();

var port = 3000;

app.route('/')
    .get(function(req,res){
        res.send('Hello dento')
    });

//redirect to facebook api
app.get('/auth/facebook', passport.authenticate('facebook'));

//Redirect back to the app after authentication
app.get('/auth/facebook/callback',
    passport.authenticate('facebook',{successRedirect:'/home',
                                      failureRedirect:'/'}));

app.listen(port);
console.log("Server running on port "+ port);
