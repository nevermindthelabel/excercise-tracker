const router = require('express').Router();
const Exercise = require('../models/Exercise');

router.route('/').get(async (req, res) => {
  try {
    await res.json({ success: true });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;