const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email});
    if (!user) throw Error("Invalid Email or password");
    
    if(password !== user.password) throw Error("Invalid Email or password");
    const role = user.role;
    const token = jwt.sign( {email: email, password: password} , "top_secret");
    res.status(200).json({ token: token , role:role });
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:error.message})
  }
  // passport.authenticate("login", async(err, user, info) => {
  //     try {
  //         if (err || !user) {
  //             const error = new Error("No User Found");
  //             console.log("Yellow", err);
  //             return next(error);
  //         }
  //         req.login(user, { session: false }, async(error) => {
  //             if (error) return next(error);
  //             const body = {
  //                 _id: user._id,
  //                 name: user.name,
  //                 email: user.email,
  //                 gender: user.gender,
  //             };
  //             const token = jwt.sign({ user: body }, "top_secret");
  //             return res.json({ token });
  //         });
  //     } catch (error) {
  //         return next(error);
  //     }
  // })(req, res, next);
});

// router.get('/Login', (req, res) => {
//     res.send("Login Here")
// })

module.exports = router;
