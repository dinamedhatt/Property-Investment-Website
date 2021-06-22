const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3100;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  MONGOURI,
  JWT_SECRET,
  CONTACT_EMAIL,
  CONTACT_PASSWORD,
  } = require("./keys");
  
  const nodemailer = require("nodemailer");
  require("dotenv").config();
const requireLogin = require('./middleware/requireLogin')

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FAQ = require("./models/FAQ");
const User = require("./models/User");
const Property = require("./models/Property");

//get All FAQ
app.get("/faq", (req, res) => {
  FAQ.find({}, (err, faq) => {
    res.send(faq);
  });
});

//get All users
app.get("/users", (req, res) => {
  User.find({}, (err, user) => {
    res.send(user);
  });
});

//add user (registration)
app.post("/register", (req, res) => {
  const { fname, lname, email, password, address} =
    req.body;

  if (!email || !password || !fname || !lname || !address) {
    res.send("Please fill all fields!");
    return res.status(442).json({ error: "missing fields" });
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      res.send("User already exists!");
      return res.status(442).json({ error: "user exist" });
    }
    bcrypt.hash(password, 12).then((hashedPassword) => {
      const newUser = new User({
        fname,
        lname,
        email,
        password: hashedPassword,
        address,
        occupation: "",
        image: "",
      });
      newUser
        .save()
        .then((user) => {
          res.send("success");
        })
        .catch((err) => {
          res.send("error");
        });
    });
  });
});

//checking user for login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("Please fill all fields!");
    return res.status(422).json({ error: "please fill all fields!" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      res.send("Invalid email or password!");
      return res.status(422).json({ error: "invalid email or password" }); //invalid mail
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.send("success");
          const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
          res.send({token,savedUser})
        } else {
          res.send("Invalid email or password!");
          return res.status(422).json({ error: "invalid email or password" }); //invalid password
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});


// logging into profile and getting data with token in middleware
app.get('/profile',requireLogin,(req,res)=>{
  res.send('logged to profile')
})


//get All properties
app.get("/property", (req, res) => {
  Property.find({}, (err, property) => {
    if(err){
      console.log(err);
    }
    else{
    res.send(property);
    }
  });
});


//contact us form
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  auth: {
  user: CONTACT_EMAIL,
  pass: CONTACT_PASSWORD,
  },
  });
  
  // verify connection configuration
  transporter.verify(function (error, success) {
  if (error) {
  console.log(error);
  } else {
  console.log("Server is ready to take our messages");
  }
  });
  
  app.post("/contact", (req, res, next) => {
  var mail = {
  from: req.body.email,
  to: "dealgenie98@gmail.com",
  subject: req.body.subject,
  text: req.body.body,
  html: `<div>
  Dear Deal Genie,<br/><br/>
  ${req.body.body}<br/><br/>
  Regards,<br/>
  ${req.body.name}<br/>
  ${req.body.email}
  </div>`,
  };
  
   transporter.sendMail(mail, (err, data) => {
  if (err) {
  console.log(err);
  res.json({
  status: "fail",
  });
  } else {
  res.json({
  status: "success",
  });
  }
  });
  });

app.listen(port, () => {
  console.log("server running");
});
