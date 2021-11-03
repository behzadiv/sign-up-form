const Input = ({label ,formik ,name ,type="text"}) => {
    return ( 
        <div>
        <label htmlFor={name}>{label}</label>
        <input id={name} type={type} name={name} {...formik.getFieldProps(name)} />
        {formik.errors[name] && formik.touched[name]&& (
          <div className="error">{formik.errors[name]}</div>
        )}
      </div>
     );
}
 
export default Input;