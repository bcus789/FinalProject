const router = require("express").Router();
const User = require('../db/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const decode = require('../auth/decode')
//const path = require("path");


// POST api/user/register (register new user) 
router.route("/register")
  .post((req, res) => {
      const { username, email, firstName, lastName, password } = req.body;
      
      if (!username || !email || !password || !firstName || !lastName) {
        return res.status(400).json({msg: "Required field(s) missing"})
      }

      User.findOne({email: email}, (err, result) => {
        if (result) return res.status(400).json({msg: 'Email already in use'})
        const newUser = new User({ username, email, firstName, lastName, password })
        
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser.save()
              .then(user => {
                
                jwt.sign(
                  {id: user._id },
                  process.env.JWT_SECRET,
                  {expiresIn: 3600},
                  (err, token) => {
                    if (err) throw err;
                    res.json({
                      token,
                      user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                      }
                    })
                  }
                )
              })
          })
        })
      })
  });


// POST api/user/auth (authenticate client)
router.route('/auth')
  .post((req, res) => {
  const {email, password} = req.body;

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({email: email})
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:3600},
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user._id,
                  username: user.username,
                  email: user.email
                }
              });
            }
          )
        })
    })
});


// GET api/user/info (Get user data)
router.route('/info')
  .get(decode, (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then(user => {
        console.log('Sending user data associated with: ' + user.email)
        res.json(user)
      }) 
  });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
