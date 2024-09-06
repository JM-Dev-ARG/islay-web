import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: import.meta.env.GMAIL_USER,
    pass: import.meta.env.GMAIL_PASS,
  },
});
