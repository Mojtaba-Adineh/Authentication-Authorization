import React from "react";
import "./register.scss";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { registerSchema } from "./schema";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../../services/authService";

const Register = () => {

  const onSubmit = async (values, actions) => {
    if (values) {
      try {
        const { data } = await signUp(values.email, values.password);
        if (data.errors) {
          throw new Error("the user has already Registered!");
        }else{
          localStorage.setItem("user" , JSON.stringify(data));
          localStorage.setItem("email", JSON.stringify(values.email));
          
          toast.success("Registered successfully!");
          await new Promise((resolve) => setTimeout(resolve, 2000));
          window.location = "/";
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
          confirmPassword: "",
        }}
        enableReinitialize
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <div>
            <h5>Register for free!</h5>
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
              <CustomInput
                value={props.values.confirmPassword}
                name="confirmPassword"
                className="custom-input"
                placeholder="Confirm password"
                id="confirmPassword"
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
