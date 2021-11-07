import { useEffect, useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "../common/Input";
import RadioButton from "../common/RadioInput";
import SelectComponent from "../common/SelectComponent";
import CheckboxInput from "../common/CheckboxInput";
import AcceptTermCheckbox from "../common/AcceptTermCheckbox";
import { toast } from "react-toastify";
import signUpMale from "../icons/signupMale.svg"
import signUpFemale from "../icons/signupFemale.svg"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  gender: "0",
  nationality: "",
  skills: [],
  term: false,
};
//
const validationSchema = Yup.object({
  name: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes}/>)
    .min(6, "Enter at least 6 char"),
  email: Yup.string().email("Invalid Email").required(<FontAwesomeIcon icon={faTimes}/>),
  phoneNumber: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes}/>)
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required(<FontAwesomeIcon icon={faTimes}/>)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Gender must be selected"),
  nationality: Yup.string().required("Select Your Nationality!"),
  skills: Yup.array().min(1).required("Select one at least"),
  term: Yup.boolean().required().oneOf([true], "Accept terms"),
});

const SignUpForm = () => {
  const [formData, setFormData] = useState(null);
  const radioOption = [
    { label: "Male", value: "0" },
    { label: "Female", value: "1" },
  ];
  const selectOptions = [
    { label: "Select nationality", value: "" },
    { label: "Iran", value: "IR" },
    { label: "Germany", value: "GER" },
    { label: "USA", value: "US" },
  ];
  const checkboxOptions = [
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "REACT", value: "react" },
  ];
  const onSubmit = (values, actions) => {
    //console.log(values)
    axios
      .post("http://localhost:3003/users/", values)
      .then(() =>
        {actions.resetForm({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          passwordConfirmation: "",
          gender: "0",
          nationality: "",
          skills: [],
          term: false,
        }
        )
        toast.success("Your signUp is complete")})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // axios
    //   .get("http://localhost:3002/users/1")
    //   .then((res) => setFormData(res.data))
    //   .catch();
    console.log("ok");
  }, []);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  console.log(formik.touched);
  return (
    
    <form onSubmit={formik.handleSubmit}>
      <p><h1>Sign Up </h1><img src={formik.values.gender === "0" ? signUpMale : signUpFemale } alt=""/> </p>
      <label>Account Details :</label>
      <section>
      <Input name="name" label="Name" formik={formik} />
      <Input name="phoneNumber" label="PhoneNumber" formik={formik} />
      <SelectComponent
        selectOptions={selectOptions}
        name="nationality"
        formik={formik}
      />
      <RadioButton formik={formik} name="gender" radioOption={radioOption} />

      </section>
       <label>Enter Registration Details :</label>
      <section>

      <Input name="email" label="Email" formik={formik} />
      <Input name="password" label="Password" type="password" formik={formik} />
      <Input
        name="passwordConfirmation"
        label="Password confirm"
        type="password"
        formik={formik}
      />
      </section>
      <label> Skills :</label>
      <section>
      <CheckboxInput
        formik={formik}
        name="skills"
        checkboxOptions={checkboxOptions}
      />
      </section>
      <AcceptTermCheckbox formik={formik} name="term" />
      <button
        type="submit"
        className={formik.isValid ? "submitActive" : "submitNotActive"}
        disabled={!formik.isValid}
      >
        Submit
      </button>
    </form>
    
  );
};

export default SignUpForm;
