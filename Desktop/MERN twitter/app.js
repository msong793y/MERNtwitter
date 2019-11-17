const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const User = require("./models/User")
const passport = require('passport')



//routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport)

// app.get("/", (req, res) => {
//       // const user = new User({
//       //   handle: 'jim',
//       //   email: "jim@jim.jim",
//       //   password:"jimisgreat123"
//       // })
//         user.save()
//         console.log(res);     
//         res.send("whats up yo")});
app.use("/api/users", users);
app.use("/api/tweets", tweets);



//port info
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



