const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @route      GET api/profile
// @desc       Test route
// @access     Private
router.get("/", (req, res) => {
  res.send("Profile route");
});

module.exports = router;