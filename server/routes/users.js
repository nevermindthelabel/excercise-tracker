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

router.route('/add').post(async(req, res) => {
  const { username } = req.body;
  try {
    const newUser = new User({username});
    await newUser.save()
    res.json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.route('/delete/:id').delete(async(req, res) => {
  const { id } = req.params;
  try {
    await User.deleteOne({ _id: id });
    res.json({ success: `User id ${id} deleted` });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;