const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Creating a User, Does't require auth
router.post("/", async (req, res) => {
  const user = User(req.body);
  const result = await user.save();
  res.send(result);
});

module.exports = router;
