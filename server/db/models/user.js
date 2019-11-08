const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: { type: String, required: false },
    password: { type: String, required: false }
  }
);

const User = mongoose.model("User", user);

module.exports = User;
