const express = require("express");
http = require('http');
const app = express();
var socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testdb");


io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function (data) {
    io.emit('RECEIVE_MESSAGE', data);
  })
  socket.on("disconnect", () => console.log("Client disconnected"));

});

// Start the server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
