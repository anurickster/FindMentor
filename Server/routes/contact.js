const express = require('express');
const ContactedUser = require('./../models/contact');
const router = express.Router();
const node_mailer = require('nodemailer');

router.post('/contactedduser', async (req, res) => {
  // db and insert one mentor
  let contacteduser = await ContactedUser.create(req.body);
  res.status(201).json(contacteduser);
  const transporter = node_mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sakinalauppi@gmail.com',
      pass: 'uppi1308',
    },
  });

  var mailOptions = {
    from: 'findmentor@gmail.com',
    to: req.body.email,
    subject: 'contacting for help',
    text: `Name:${req.body.name},
        Email:${req.body.email},
        Number:${req.body.phone},
        I am facing : ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
