const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    password: { type: String, required: false }

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

user.methods = {
  // check if password entered matches the hash
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  // convert plaintext to hashed password
  hashPassword: plainText => {
    return bcrypt.hashSync(plainText, 10)
  }
}

user.pre('save', function (next) {
  if (!this.password) {
    console.log('db/models/user.js: No password provided');
    next();
  } else {
    console.log('db/models/user.js: hashed password in pre-save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", user);

module.exports = User;