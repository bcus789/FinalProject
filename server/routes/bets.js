const router = require("express").Router();
const Bet = require('../db/models/bet');

// POST /api/bet/submit (submit new bet)
router.route('/submit')
  .post((req, res) => {
    console.log(req.body);
    const newBet = new Bet({
      userId: req.body.userId,
      amount: req.body.amount,
      event: req.body.event,
      betFor: req.body.betFor
    })
    newBet.save((err, bet) => {
      if (err) return console.log(err);
      res.json({
        msg: "bet has successfully saved to the database",
        bet: bet
      });
    })
  })

  // retrieve all bets placed by user
  router.route('/:id')
    .get((req, res) => {
      Bet.find({userId: req.params.id}, (err, result) => {
        if (err) throw err;
        res.json(result)
      })
    })

  //router.route('/')

module.exports = router;