const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String },
    date: { type: Date, default: Date.now },
    wallet: Number

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

const User = mongoose.model("User", userModel);

module.exports = User;
