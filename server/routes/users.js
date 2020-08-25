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

router.route('/add').post((req, res) => {
  const { username } = req.body;
  const newUser = new User({username});
  newUser.save()
  .then(() => res.json('user added'))
  .catch(err => res.status(400).json(err));

});

module.exports = router;