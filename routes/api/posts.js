const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @route      GET api/posts
// @desc       Test route
// @access     Private
router.get("/", (req, res) => {
  res.send("Posts route");
});

module.exports = router;