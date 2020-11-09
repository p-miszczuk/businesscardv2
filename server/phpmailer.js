const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async ({ name, email, subject, message }) => {
  const options = {
    from: email,
    to: "piotr.miszczuk@interia.pl",
    subject,
    text: `${name} pisze: ${message}`
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASS
    }
  });

  await transporter.sendMail(options);
};

module.exports = sendEmail;
