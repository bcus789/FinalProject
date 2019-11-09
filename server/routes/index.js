
const express = require('express')
const router = require("express").Router();
const passport = require('../passport')
const User = require('../db/models/user');
const path = require("path");
const mongoose = require('mongoose'); // needed ???

// register user
router.route("/user/register")
  .post(function (req, res) { 
      console.log(req.body);
      const { username, password } = req.body;

      User.findOne({username:username}, (err, result) => {
        if(result) console.log('username already exists');
        else if (err) console.log(err);
        else {
          const newUser = new User({
            username: username,
            password: password
          })
          newUser.save((err, savedUser) => {
            if (err) res.json(err);
            res.json(savedUser);
          });
        }
      });
    });
  
  // Log in user
  router.route('/user/login')
    .post((req, res, next) => {
          console.log('routes/user.js, login, req.body: ');
          console.log(req.body);
          next();
      },
      passport.authenticate('local'),
      (req, res) => {
          console.log('logged in', req.user);
          var userInfo = {
              username: req.user.username
          };
          res.send(userInfo);
      }
  );
  
  // Log out user
  router.route('/user/logout')
    .post((req, res) => {
      if (req.user) {
          req.logout();
          res.send({ msg: 'logging out' });
      } else {
          res.send({ msg: 'no user to log out' });
      }
  });
  
  // Retrieve user information
  router.route('/user/')
    .get((req, res, next) => {
      console.log('===== user!!======');
      console.log(req.user);
      if (req.user) {
          res.json({ user: req.user });
      } else {
          res.json({ user: null });
      }
  });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
