const AcceptTermCheckbox = ({ formik, name }) => {
  return (
    <div >
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
        <label htmlFor={name}>Accept <a href="#" target="_blank"> Terms of uses</a> and <a href="#" target="_blank"> Privacy Policy</a></label>
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default AcceptTermCheckbox;
