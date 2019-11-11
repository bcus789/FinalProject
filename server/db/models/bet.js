//betModel
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betModel = new Schema(
  {
    amount: Number,
    event: String,
    eventDate: { type: Date },
    selection: String
  },
  {
    timestamps: true
  }
);

const Bet = mongoose.model("Bet", betModel);

module.exports = Bet;
