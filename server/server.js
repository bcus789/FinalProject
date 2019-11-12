if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const passport = require('./passport');
const session = require('express-session');
const http = require('http');
const socket = require('socket.io');
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 5000;

// Configure middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ 
  secret: 'secret',
  resave: false,
  saveUninitialized: false })
);

// Configure Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testdb");

// Configure Socket IO
const server = http.createServer(app);
const io = socket(server);
io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('RECEIVE_MESSAGE', data);
  })
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
