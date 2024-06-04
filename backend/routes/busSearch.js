

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Buses = require("../models/Buses");



router.get("/search/", async(req, res) =>{
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const city = req.query.city
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || "";

          const jobs = await Buses.find({
            "from": { $regex: city, $options: "i" },
          })
            .skip(page * limit)
            .limit(limit);
    
          const total = await Buses.countDocuments({
            "from": { $regex: city, $options: "i" },
          });
    
          const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            jobs,
          };
          res.status(200).json(response);
     
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
      }
})


module.exports = router;