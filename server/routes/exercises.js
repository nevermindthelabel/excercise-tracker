const router = require('express').Router();
const Exercise = require('../models/Exercise');

router.route('/').get((req, res) => {
  try {
    Exercise.find().then(exercises => res.json(exercises))
  } catch (err) {
    res.status(400).json(`Error: ${err}`)
  }
});

router.route('/add').post((req, res) => {
  const username = req.body.ussername;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;
});

module.exports = router;