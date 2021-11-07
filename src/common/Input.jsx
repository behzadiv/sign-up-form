const Input = ({label ,formik ,name ,type="text"}) => {
    return ( 
        <div >
        <label htmlFor={name}>{label}</label>
        <div style={{display:"flex" , alignItems:"center"}}>
        <input id={name} type={type} name={name} {...formik.getFieldProps(name)} />
        {formik.errors[name] && formik.touched[name]&& (
          <div className="error">{formik.errors[name]}</div>
        )}
        </div>
      </div>
     );
}
 
export default Input;