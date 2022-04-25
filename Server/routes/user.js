const express = require("express");
const router = express.Router();
const User = require("./../models/user");
const asyncHandler = require("express-async-handler");
const { authenticateUser } = require("../middlewares/auth");
const node_mailer = require("nodemailer");

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const user = await User.create(req.body);
    console.log(req.body.email);
    const token = user.getSignedJwtToken();

    // const transporter = node_mailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'sakinalauppi@gmail.com',
    //     pass: 'uppi1308',
    //   },
    // });

    // var mailOptions = {
    //   from: 'findmentor@gmail.com',
    //   to: req.body.email,
    //   subject: 'Mentor App Registration successful',
    //   text: `Thank you for registering with Mentor App. Explore the app and start searching for mentors. Upgrad your skills and get hired by the best mentors in the world. Thank you.`,
    // };

    // transporter.sendMail(mailOptions, function (err, info) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });

    res.status(201).json({ id: user._id, auth: true, token: token });
  })
);

router.post("/login", authenticateUser, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const token = user.getSignedJwtToken();
  res.status(200).json({ auth: true, token: token });
});

// router.get("/MpostD/:id", async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// });

module.exports = router;
