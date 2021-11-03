import { useState } from "react";
import "../App.css";
import { useFormik } from "formik";

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
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <div className="error">{formik.errors.name}</div>}
        </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div className="error">{formik.errors.email}</div>}      
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
         onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div className="error">{formik.errors.password}</div>}
      </div>
      <button type="submit" className="submitBtn">submit</button>
    </form>
  );
};

export default SignUpForm;
