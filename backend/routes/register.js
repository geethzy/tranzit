const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const moment = require("moment");
const bodyParser = require("body-parser");

router.get("/", (req, res) => {
  res.send("Register Here");
});

//Body-Parser

router.post("/", async (req, res) => {
  //Hash Password
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      gender: req.body.gender,
      city: req.body.city,
    };
    const newUser = new User(user);
    await newUser.save();
    console.log(newUser);
    res.status(200).send({ msg: "User Created" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
});

module.exports = router;
