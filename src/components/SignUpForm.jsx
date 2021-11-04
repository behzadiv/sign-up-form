import { useEffect, useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "../common/Input";
import RadioButton from "../common/RadioInput";

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
  const radioOption=[
    {label:"Male",value:"0"},
    {label:"Female",value:"1"}
  ]
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
      <Input  name="name" label="Name" formik={formik}/>
      <Input  name="email" label="Email" formik={formik}/>
      <Input  name="phoneNumber" label="PhoneNumber" formik={formik}/>
      <Input  name="password" label="Password" type="password" formik={formik}/>
      <Input  name="passwordConfirmation" label="Password confirm" type="password" formik={formik}/>
      
      <RadioButton formik={formik} name="gender" radioOption={radioOption}/>
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
