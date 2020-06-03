const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @route      GET api/auth
// @desc       Test route
// @access     Private
router.get("/", (req, res) => {
  res.send("Auth route");
});

module.exports = router;