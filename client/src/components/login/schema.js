import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required("required!"),
  password: yup.string().min(6).max(50).required("required!"),
});
