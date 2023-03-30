import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email().required("required!"),
  password: yup.string().min(6).max(50).required("required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match!")
    .required("required!"),
});
