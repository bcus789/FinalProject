const path = require("path");
const router = require("express").Router();

router.route("/login")
    .post( function(req, res){
      console.log("login received"); 
      console.log(req.body);
    })

router.route("/user")
    .post( function(req, res){ 
      console.log("signup received");
      console.log(req.body);
    })

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
