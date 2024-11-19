import nodemailer from "nodemailer";

console.log(import.meta.env.SMTP_SERVER);
console.log(import.meta.env.MAIL_PASS);
console.log(import.meta.env.MAIL_USER);



export const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_SERVER,
  port: 465,
  auth: {
    user: import.meta.env.MAIL_USER,
    pass: import.meta.env.MAIL_PASS,
  },
});