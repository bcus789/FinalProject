const path = require("path");
const router = require("express").Router();
const mongoose = require('mongoose');
const User = require('../db/models/user');

router.route("/login")
    .post( function(req, res){
      console.log("login received"); 
      console.log(req.body);
    })

router.route("/register")
    .post( function(req, res){ 
      console.log(req.body);
      const { username, password } = req.body;

      User.findOne({username:username}, (err, result) => {
        if(result) console.log('username already exists');
        else if (err) console.log(err)
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

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
