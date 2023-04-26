import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { sendContactMail } from "../../services/mail.service";
import { AiOutlinePhone, AiOutlineMail, AiFillHome } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//validate form
const ContactSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  textarea: Yup.string().required("Text is required"),
});

const ContactComponent = () => {
  const navigate = useNavigate();
  return (
    // <div className="contactWrapper">
    <Formik
      initialValues={{
        email: "",
        subject: "",
        textarea: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        console.log(values);
        sendContactMail(values)
          .then((response) => {
            if (response.status === 220) {
              toast.success(
                "Your message has been successfully sent. Thank you for getting in touch."
              );
              navigate("/");
            } else if (response.status === 412) {
              toast.error("Something went wrong.Please try later.");
            }
          })
          .catch((err) => {
            toast.error("Something went wrong.Please try later.");
          });
      }}
    >
      {({ error, touched }) => {
        return (
          <div className="contact-box">
            <div className="content">
              <h2>Contact Us</h2>
              <p>
                We would love to hear from you! Please don't hesitate to get in
                touch with us if you have any questions, feedback or concerns.
                You can reach us by phone, email or by filling out the contact
                form.
              </p>
              <p>
                If you have a question about an order, please include your order
                number in your message. For general inquiries, please allow us
                up to 48 hours to respond.
              </p>
              <h3>
                Thank you for your interest in our products. We look forward to
                hearing from you!
              </h3>
            </div>
            <div className="row">
              <Form>
                <div className="user-box">
                  <Field name="email" />
                  <label htmlFor="email">Email</label>
                  <p>
                    <ErrorMessage name="email" />
                  </p>
                </div>

                <div className="user-box">
                  <Field name="subject" />
                  <label htmlFor="subject">Subject</label>
                  <p>
                    <ErrorMessage name="subject" />
                  </p>
                </div>
                <div className="user-box">
                  <Field name="textarea" as="texarea" component="textarea" />
                  <label htmlFor="textarea">Message</label>
                  <p>
                    <ErrorMessage name="textarea" />
                  </p>
                </div>
                <button type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Send message
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ContactComponent;
