const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

// Define user model
const userModel = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: false },
    google: { googleId: { type: String, required: false }},
    date: { type: Date, default: Date.now },
    wallet: {type: Number}

    // ref user for verification
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User"
    // }
  },
  {
    timestamps: true
  }
);

// Define user methods
userModel.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// Define hooks for pre-saving
userModel.pre('save', function(next) {
	if (!this.local.password) {
		console.log('=======NO PASSWORD PROVIDED=======');
		next();
	} else {
		this.local.password = this.hashPassword(this.local.password);
		next();
	}
	// this.password = this.hashPassword(this.password)
	// next()
});

const User = mongoose.model("User", userModel);

module.exports = User;
