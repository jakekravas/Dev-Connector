const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route      GET api/auth
// @desc       Test route
// @access     Private
router.get("/", auth, async (req, res) => {
  try {
    // getting all user data except for password
    const user = await User.findById(req.user.id).select("-password");
    res.json({user});
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;