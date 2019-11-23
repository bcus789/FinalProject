const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    password: { type: String, required: false },
    wallet: {type: Number, default: 1500}
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", user);

module.exports = User;
