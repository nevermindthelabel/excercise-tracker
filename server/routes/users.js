const router = require('express').Router();
const User = require('../models/Users');

router.route('/')
  .get(async (req, res) => {
    try {
      const Users = await User.find();
      res.json(Users);
    } catch (error) {
      console.error(error)
    }
});

module.exports = router;