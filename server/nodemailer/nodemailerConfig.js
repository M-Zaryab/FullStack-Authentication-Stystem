const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_SENDER,
    pass: process.env.NODEMAILER_PASS,
  },
});

module.exports = { transporter };
