var config = require('./config');
var FacebookStrategy = require ('passport-facebook');
var GoogleStrategy = require ('passport-google-oauth').OAuth2Strategy; 
var TwitterStrategy = require('passport-twitter').Strategy;
var GitHubStrategy = require('passport-github2');
var passport = require ('passport');
var User = require('../models/users')

//Facebook
passport.use(new FacebookStrategy({
    clientID: config.facebookAuth.clientID,
    clientSecret: config.facebookAuth.clientSecret,
    callbackURL: config.facebookAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
//Google
passport.use(new GoogleStrategy({
  clientID: config.googleAuth.clientID,
  clientSecret: config.googleAuth.clientSecret,
  callbackURL: config.googleAuth.callbackURL
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));
//Twitter
passport.use(new TwitterStrategy({
  consumerKey: config.twitterAuth.clientID,
  consumerSecret: config.twitterAuth.clientSecret,
  callbackURL: config.twitterAuth.callbackURL
},
function(token, tokenSecret, profile, done) {
  User.findOrCreate({twitterId:profile.id}, function(err, user) {
    if (err) { return done(err); }
    done(null, user);
  });
}
));

//Github
passport.use(new GitHubStrategy({
  clientID: config.githubAuth.clientID,
  clientSecret: config.githubAuth.clientSecret,
  callbackURL: config.githubAuth.callbackURL
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));
