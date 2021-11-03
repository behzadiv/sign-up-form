import { useState } from "react";
import "../App.css";
import { useFormik } from "formik";
const SignUpForm = () => {
  const formik = useFormik({ initialValues: { name: "", email: "" ,password:""} });
  console.log(formik.values);
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ok");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default SignUpForm;
