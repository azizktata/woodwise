"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ text, sujet, email }) => {
  try {
    await transporter.verify();
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: sujet,
    text: text,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.messageId) {
      return { success: true, message: info.response };
    } else {
      throw new Error("Une erreur s'est produite lors de l'envoi du message.");
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};