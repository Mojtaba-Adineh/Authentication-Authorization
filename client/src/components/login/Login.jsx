import React from "react";
import "./login.scss";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { LoginSchema } from "./schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/authService";

const Register = () => {
  const onSubmit = async (values, actions) => {
    if (values) {
      try {
        const { data } = await login(values.email, values.password);
        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("email", JSON.stringify(values.email));
          
          toast.success("Loged in successfully!");
          await new Promise((resolve) => setTimeout(resolve, 2000));
          window.location = "/";
        } else {
          throw new Error("Incorrect Email or Password!");
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        enableReinitialize
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <div>
            <Form className="form">
              <CustomInput
                value={props.values.email}
                name="email"
                className="custom-input"
                placeholder="Email"
                id="email"
                type="email"
              />
              <CustomInput
                value={props.values.password}
                name="password"
                className="custom-input"
                placeholder="Password"
                id="password"
                type="password"
              />
              <button
                className={props.isSubmitting ? "submitting" : ""}
                type="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
