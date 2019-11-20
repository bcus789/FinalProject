const router = require("express").Router();
const Bet = require('../db/models/bet');

// POST /api/bet/submit (submit new bet)
router.route('/submit')
  .post((req, res) => {
    console.log(req.body);
    const newBet = new Bet({
      amount: req.body.amount,
      event: 'event',
      selection: 'selection'
    })
    newBet.save((err, bet) => {
      if (err) return console.log(err);
      res.json({
        msg: "bet has successfully saved to the database",
        bet: bet
      });
    })
  })

  //router.route('/')

module.exports = router;