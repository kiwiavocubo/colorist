var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

module.exports = {
    USER: 'vitahu1005@gmail.com', 
    PASS: 'bestmeV1ta'
}
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var fname = req.body.fname
  var lname = req.body.lname
  var email = req.body.email
  var message = req.body.message
  var content = `fname: ${fname} \n lname: ${lname} \n email: ${email} \n message: ${message} `

  var mail = {
    from: fname,
    to: 'vitahu1005@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;