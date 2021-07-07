import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useAppDispatch } from "../../../app/hooks";
import { loginUser } from "../redux/auth.slice";
import { LoginCredentials } from "../types/auth.types";

export default function Login() {
  const dispatch = useAppDispatch();
  let history = useHistory();

  const handleSubmit = async (values: LoginCredentials) => {
    const response = await dispatch(loginUser(values));
    if (response.payload.data) {
      history.push("/app");
    }
    console.log(response.payload.data);
  };

  return (
    <div>
      <h1>Login!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
