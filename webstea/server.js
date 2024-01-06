const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('/send-email', cors());

app.post('/send-email', (req, res) => {
  const { name, tel, email, type, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.webstea.studio',
    port: 465,
    secure: true,
    auth: {
      user: 'no-reply@webstea.studio',
      pass: '',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'no-reply@webstea.studio',
    to: 'websteastudio@gmail.com', 
    subject: 'New Form Submission',
    html: `
      <p>В нес клієнт: ${name}</p>
      <p>Ось його телефон, подзвоніть: ${tel}</p>
      <p>Ще є пошта, напишіть: ${email}</p>
      <p>Він хоче сайт типу: ${type}</p>
      <p>Додатково: ${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('OK');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});