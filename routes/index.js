var express = require('express');
var router = express.Router();
var passport = require('passport');
var UserModel = require('./users.js')
var GoogleStrategy = require('passport-google-oidc');
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect/google',
  scope: [ 'email','profile' ]
},async function verify(issuer, profile, cb) {
  console.log(profile)
 var existingUser=   await UserModel.findOne({email:profile.emails[0].value})
 if(existingUser){
  cb(null, existingUser)
 }
 else{
  var UserCreate = await UserModel.create({name:profile.displayName, email:profile.emails[0].value })
  cb(null, UserCreate)
 }
 }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', );
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/login/federated/google', passport.authenticate('google'));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router;
