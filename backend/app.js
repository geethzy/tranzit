const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());



// Login and Register Page
require("./auth/auth");
const login = require("./routes/login");
const loggedInPage = require("./routes/loggedInUser");
// ----------------------------------------------------

const bookingRoute = require("./routes/routeSelection");
const busAdd = require('./routes/busReg');
const busSearch = require('./routes/busSearch');

const registerRouter = require("./routes/register");
//--------------------------------------------------------


app.use("/", login);

app.use("/booking", bookingRoute);
app.use("/bus", busSearch);

app.use("/bus-add", busAdd);

app.use("/register", registerRouter); // To register page
app.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  loggedInPage
); 




//DB Config
const DB_URL = require("./config/keys").MongoURI;

//connect to mongo
//---------------------------------------------
mongoose
  .connect(
    //"mongodb+srv://oshan:r4lnHCmIcnIOkTm0@cluster0.w4kso6o.mongodb.net/?retryWrites=true&w=majority",
    "mongodb+srv://anu:3COCz7DFuTuqharj@cluster0.lvf7aon.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    throw err;
  });
//---------------------------------------------


//To Secure Route

app.listen(3000, () => {
  console.log(`App is running on ${3000} PORT`);
});

module.exports = app;
