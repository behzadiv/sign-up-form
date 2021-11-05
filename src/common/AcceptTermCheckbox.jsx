const AcceptTermCheckbox = ({formik,name}) => {
    return ( 
        <div className="term">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={true}
          checked={formik.values[name]}
        />
        <label htmlFor={name}>Accept terms and condition</label>
        {formik.errors[name] && formik.touched[name]&& (
        <div className="error">{formik.errors[name]}</div>
        )}
      </div>
     );
}
 
export default AcceptTermCheckbox;