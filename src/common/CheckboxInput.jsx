import React from 'react';

const CheckboxInput = ({ checkboxOptions, formik, name }) => {
  return (
    <div >
      <label>Your Skills :</label>
      <div className="checkBox">
      {checkboxOptions.map((item) =>(
          <React.Fragment key={item.value}>
            <input
              type="checkbox"
              name={name}
              id={item.label}
              value={item.value}
              checked={formik.values[name].includes(item.value)}
              onChange ={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </React.Fragment>
        )
      )}
      </div>
      {/* {console.log(formik)} */}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
        )}
      
    </div>
  );
};

export default CheckboxInput;
