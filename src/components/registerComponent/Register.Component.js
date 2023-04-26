import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

//validate form
const RegisterSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  username: Yup.string().required("Username is required"),
});

const RegisterComponent = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        username: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        registerUser(values)
          .then((response) => {
            if (response.status === 412) {
              toast.error("User with this email address already exist.");
            } else if (response.status === 220) {
              toast.success(
                "Successfully registered. Please check you mail box."
              );
              navigate("/login");
            }
          })
          .catch((error) => {
            toast.error(error?.response.data);
          });
      }}
    >
      {({ error, touched }) => {
        return (
          <div className="register-box">
            <Form>
              <div className="user-box">
                <Field name="email" />
                <label htmlFor="email">Email</label>
                <p>
                  <ErrorMessage name="email" />
                </p>
              </div>

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
                <Field name="username" />
                <label htmlFor="username">Username</label>
                <p>
                  <ErrorMessage name="username" />
                </p>
              </div>

              <div className="user-box">
                <Field type="password" name="password" />
                <label htmlFor="password">Password</label>
                <p>
                  <ErrorMessage name="password" />
                </p>
              </div>

              <button type="submit" className="registerBtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </button>
            </Form>
            <p>
              Already have an account?
              <Link to="/login" className="linkReset register">
                Login
              </Link>
            </p>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterComponent;
