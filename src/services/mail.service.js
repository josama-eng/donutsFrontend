import axios from "axios";

export const sendContactMail = (payload) =>
  axios.post("/api/mail/sendContact", payload);
