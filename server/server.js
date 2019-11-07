if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const express = require("express");
const http = require('http');
const socket = require('socket.io');
const passport = require('./passport');
const routes = require("./routes");
const dbConnection = require('./db');
const PORT = process.env.PORT || 3001;

// Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session());

// Add routes
app.use(routes);

// Configure socket-io
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
