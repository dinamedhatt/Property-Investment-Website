const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3100;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const requireLogin = require("./middleware/requireLogin");
app.use(cors());
app.use(express.json());
const path = require("path");
const multer = require("multer");
app.use(express.static(path.join(__dirname, "images/"))); //for saving images

const {
  MONGOURI,
  JWT_SECRET,
  CONTACT_EMAIL,
  CONTACT_PASSWORD,
} = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FAQ = require("./models/FAQ");
const User = require("./models/User");
const Property = require("./models/Property");

//fixing images storing
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./images");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now + "_" + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback("Type file is not access", false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

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
app.post("/register", upload.single("image"), (req, res, next) => {
  const { fname, lname, email, password, address } = req.body;

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
      });
      if (req.file) {
        newUser.image = req.file.filename;
      }
      newUser.save((err, data) => {
        if (err) {
          next(err);
        } else {
          res.send("success");
        }
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
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const id = savedUser._id;
          res.send({ token, id });
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

// logging into profile
app.get("/profile/:id", requireLogin, (req, res) => {
  User.find({}, (err, users) => {
    users.forEach((user) => {
      if (user.id === req.params.id.split("=")[1]) {
        res.send(user);
      }
    });
    if (err) {
      console.log(err);
    }
  });
});

//edit user data
app.put("/edit/:id", (req, res) => {
  // if(req.file){
  //   user.image = req.file.filename;
  // }
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        occupation: req.body.occupation,
      },
    }
  ).then(() => res.send("success"));
  // res.send(user)
});

//get All properties
app.get("/property", (req, res) => {
  Property.find({}, (err, property) => {
    if (err) {
      console.log(err);
    } else {
      res.send(property);
    }
  });
});

//get property details
app.get("/property/:id", (req, res) => {
  Property.findOne({ id: req.params.id }, (err, prop) => {
    if (prop) {
      res.send(prop);
    }
  });
});

//put the like user
app.put("/like/:id", requireLogin, (req, res) => {
  //addToSet for unique values
  User.updateOne({ _id: req.params.id }, { $addToSet: { wishlist: req.body } })
    .then(() => res.send("success"))
    .catch((err) => {
      res.send("error");
    });
});

//deleting by prop id
app.put("/unlike/:id", requireLogin, (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { $pull: { wishlist: { id: req.body.id } } }
  )
    .then(() => res.send("success"))
    .catch((err) => {
      res.send("error");
    });
});

//get wishlist of user
app.get("/wishlist/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (user) {
      res.send(user.wishlist);
    }
  });
});

app.get("/recommend/:id", async (req, res) => {
  await Property.find(
    {
      $or: [
        { location: req.params.id },
        { propType: req.params.id },
        { investType: req.params.id },
      ],
    },
    (err, prop) => {
      if (prop) {
        res.send(prop);
      } else {
        res.send("error");
      }
    }
  );
});

// -----------------------------------applied
//add the appplied
app.put("/apply/:id", requireLogin, (req, res) => {
  //addToSet for unique values
  User.updateOne({ _id: req.params.id }, { $addToSet: { property: req.body } })
    .then(() => res.send("success"))
    .catch((err) => {
      res.send("error");
    });
});

//get applies list of user
app.get("/appliedList/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (user) {
      res.send(user.property);
    }
  });
});

//deleting property from applied by prop id
app.put("/unapply/:id", (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { $pull: { property: { id: req.body.id } } }
  )
    .then(() => res.send("success"))
    .catch((err) => {
      res.send("error");
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

app.post("/contact", (req, res) => {
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
  transporter.sendMail(mail, (err) => {
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

// sending apply letter
app.post("/sendLetter", (req, res) => {
  var mail = {
    from: req.body.email,
    to: "dealgenie98@gmail.com",
    subject: "Application letter",
    text: req.body.applyLetter,
    html: `<div>
    Dear Deal Genie,<br/><br/>
    I'm sending you this apply letter regarding the property whose name is ${req.body.property.name} and its id equals ${req.body.property.id}
    <br/><br/>
    ${req.body.applyLetter}<br/><br/>
    Regards,<br/>
    ${req.body.viewerUser.fname}<br/>
    ${req.body.viewerUser.email}
    </div>`,
  };

  transporter.sendMail(mail, (err) => {
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

// cancel apply letter
app.post("/cancelLetter", (req, res) => {
  var mail = {
    from: req.body.user.email,
    to: "dealgenie98@gmail.com",
    subject: "Application Cancellation",
    html: `<div>
    Dear Deal Genie,<br/><br/>
    Application sent by ${req.body.user.fname} whos email is ${req.body.user.email} regarding the property "${req.body.propertyData.name}" and its id equals ${req.body.propertyData.id} has been cancelled
    </div>`,
  };

  transporter.sendMail(mail, (err) => {
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
