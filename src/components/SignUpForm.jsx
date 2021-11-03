import { useState } from "react";
import "../App.css";
import { FormikConsumer, useFormik } from "formik";

const initialValues ={
     name:"",
     email:"",
     password:""
}
const validate=(values)=>{
    let errors = {}
    if(!values.name){errors.name = "Name is required"}
    if(!values.email){errors.email = "Email is required"}
    if(!values.password){errors.password = "Password is required"}
    return errors
}
const SignUpForm = () => {
  const onSubmit =(values) =>{
      ///post data 
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
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
