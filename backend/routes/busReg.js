const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Buses = require("../models/Buses");

//Body-Parser

router.post("/", async (req, res) => {
  //Hash Password
  try {
    const user = {
        busNo: req.body.busNo,
        from: req.body.from,
      to: req.body.to,
      nic: req.body.nic,
      city: req.body.city,
      phone: req.body.phone,

    };
    const newBus = new Buses(user);
    await newBus.save();
    console.log(user);
    res.status(200).send({ msg: "Bus Created" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
});

module.exports = router;
