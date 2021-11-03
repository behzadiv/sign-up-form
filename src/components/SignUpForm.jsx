import { useState } from "react";
import "../App.css";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup"
const initialValues ={
     name:"",
     email:"",
     password:""
}
// 
const validationSchema = Yup.object({
    name:Yup.string().required("Name is Required"),
    email:Yup.string().email("Invalid Email").required("Email is Required"),
    password:Yup.string().required("Password is Required")
})
const SignUpForm = () => {
  const onSubmit =(values) =>{
      ///post data 
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  console.log("viseted fields",formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
        </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}      
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          onBlur={formik.handleBlur}
         onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
      </div>
      <button type="submit" className="submitBtn">submit</button>
    </form>
  );
};

export default SignUpForm;
