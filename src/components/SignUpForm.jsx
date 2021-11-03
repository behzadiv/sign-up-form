import { useEffect, useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  gender:"0"
};
//
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(6, "Enter at least 6 char"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required ")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender:Yup.string().required("Gender must be selected")
});

const SignUpForm = () => {
  const[formData,setFormData]=useState(null)
  const onSubmit = (values) => {
    ///post data
  };
  useEffect(()=>{
    axios.get("http://localhost:3002/users/1")
    .then(res=>  setFormData(res.data))
    .catch()
   
  },[])
  const formik = useFormik({
    initialValues:formData || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize:true,
  });
  //console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" {...formik.getFieldProps("name")} />
        {formik.errors.name && formik.touched.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" {...formik.getFieldProps("email")} />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="phonNumber">Phone Number</label>
        <input
        id="phonNumber"
          type="email"
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className="error">{formik.errors.phoneNumber}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error">{formik.errors.password}</div>
        )}
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Password Confirm</label>
        <input
         id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          {...formik.getFieldProps("passwordConfirmation")}
        />
        {formik.errors.passwordConfirmation &&
          formik.touched.passwordConfirmation && (
            <div className="error">{formik.errors.passwordConfirmation}</div>
          )}
      </div>
      <div className="radioBtn">
          <input
            type="radio"
            id="0"
            name="gender"
            value="0"
            onChange={formik.handleChange}
            checked={formik.values.gender==="0"}
          />
          <label htmlFor="0">Male</label>
        
          <input
            type="radio"
            id="1"
            name="gender"
            value="1"
            onChange={formik.handleChange}
            checked={formik.values.gender === "1"}
          />
          <label htmlFor="1">Female</label>
        
      </div>
      <button
        type="submit"
        className={formik.isValid ? "submitActive" : "submitNotActive"}
        disabled={!formik.isValid}
      >
        submit
      </button>
    </form>
  );
};

export default SignUpForm;
