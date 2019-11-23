if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const express = require("express");
//const morgan = require('morgan');
const mongoose = require("mongoose");
const http = require('http');
const socket = require('socket.io');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure middleware
//app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/testdb');
mongoose.connect('Gamblr:pass123@ds339968.mlab.com:39968/heroku_6r0c5z57');

// Routes
app.use('/api/user/', require("./routes/user"));
app.use('/api/bet/', require("./routes/bets"));

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
