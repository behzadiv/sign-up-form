import { useState } from "react";
import "../App.css";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup"
const initialValues ={
     name:"",
     email:"",
     phoneNumber:"",
     password:"",
     passwordConfirmation:""
}
// 
const validationSchema = Yup.object({
    name:Yup.string().required("Name is Required"),
    email:Yup.string().email("Invalid Email").required("Email is Required"),
    phoneNumber:Yup.string().required("Phone Number is Required ").matches(/^[0-9]{11}$/,"Invalid Phone Number"),
    password:Yup.string().required("Password is Required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
    ,
    passwordConfirmation:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')

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
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
        </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
         {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}      
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
         {...formik.getFieldProps("phoneNumber")}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className="error">{formik.errors.phoneNumber}</div>}      
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
         {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
      </div>
      <div>
        <label>Password Confirm</label>
        <input
          type="text"
          name="passwordConfirmation"
         {...formik.getFieldProps("passwordConfirmation")}
        />
        {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <div className="error">{formik.errors.passwordConfirmation}</div>}
      </div>
      <button type="submit" className="submitBtn">submit</button>
    </form>
  );
};

export default SignUpForm;
