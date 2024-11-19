import nodemailer from "nodemailer";




export const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_SERVER,
  port: 465,
  auth: {
    user: import.meta.env.MAIL_USER,
    pass: import.meta.env.MAIL_PASS,
  },
});