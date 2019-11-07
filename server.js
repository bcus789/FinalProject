const express = require("express");
const mongoose = require("mongoose");
//const passport = require('./passport');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ===== Passport ====
//app.use(passport.initialize());
//app.use(passport.session());

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testdb");

// Start the server
app.listen(PORT, function() {
  console.log(`🌎 App listening on PORT: ${PORT}!`);
});
