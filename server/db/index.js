const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(/* process.env.MONGODB_URI || */ "mongodb://localhost/testdb");

db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
});

db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database`
	)
});

module.exports = db


/* module.exports = {
  User: require("./models/userModel")
  Bet: require("./models/betModel")
}; */
