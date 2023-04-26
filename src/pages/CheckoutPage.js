import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { setCustomer } from "../redux/cart.slicer";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.number().required("Zip code is required"),
  phoneNumber: Yup.number().required("Phone number is required"),
});

const CheckoutPage = () => {
  const cart = useSelector((store) => store.cart.cart);
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cart);

  return (
    <div className="checkout-wrapper">
      {cart.length ? (
        <Formik
          initialValues={{
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            email: user.email || "",
            address: "",
            city: "",
            zipCode: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(setCustomer(values));
            navigate("/payment");
          }}
        >
          {({ error, touched }) => {
            return (
              <div className="checkout-box">
                <Form>
                  <div className="user-box">
                    <Field name="firstName" />
                    <label htmlFor="firstName">First name</label>
                    <p>
                      <ErrorMessage name="firstName" />
                    </p>
                  </div>

                  <div className="user-box">
                    <Field name="lastName" />
                    <label htmlFor="lastName">Last name</label>
                    <p>
                      <ErrorMessage name="lastName" />
                    </p>
                  </div>

                  <div className="user-box">
                    <Field name="email" />
                    <label htmlFor="email">Email</label>
                    <p>
                      <ErrorMessage name="email" />
                    </p>
                  </div>

                  <div className="user-box">
                    <Field name="address" />
                    <label htmlFor="address">Address</label>
                    <p>
                      <ErrorMessage name="address" />
                    </p>
                  </div>

                  <div className="user-box">
                    <Field name="city" />
                    <label htmlFor="city">City</label>
                    <p>
                      <ErrorMessage name="city" />
                    </p>
                  </div>

                  <div className="user-box">
                    <Field name="zipCode" />
                    <label htmlFor="zipCode">Zip Code</label>
                    <p>
                      <ErrorMessage name="zipCode" />
                    </p>
                  </div>

                  <div className="user-box">
                    <Field name="phoneNumber" />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <p>
                      <ErrorMessage name="phoneNumber" />
                    </p>
                  </div>
                  <button type="submit" className="registerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Order
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      ) : (
        <h2>Nothing to pay. Please add products to cart.</h2>
      )}
    </div>
  );
};

export default CheckoutPage;
