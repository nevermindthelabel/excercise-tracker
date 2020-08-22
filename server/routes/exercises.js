const router = require('express').Router();
const Exercise = require('../models/Exercise');

router.route('/').get((req, res) => {
  try {
    Exercise.find().then(exercises => res.json(exercises))
  } catch (err) {
    res.status(400).json(`Error: ${err}`)
  }
});

module.exports = router;