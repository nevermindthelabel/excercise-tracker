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
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise.save()
  .then(() => res.json('Excercise added'))
  .catch(err => res.status(400).json(err));
});

module.exports = router;