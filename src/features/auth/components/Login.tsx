import React from "react";
import { Formik } from "formik";

import { useAppDispatch } from "../../../app/hooks";
import { loginUser } from "../redux/auth.slice";
import { LoginCredentials } from "../types/auth.types";

export default function Login() {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: LoginCredentials) => {
    dispatch(loginUser(values));
    console.log(values);
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
