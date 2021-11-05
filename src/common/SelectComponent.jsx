const SelectComponent = ({ selectOptions, formik, name }) => {
  return (
    <div className="select">
      <select name={name} {...formik.getFieldProps(name)}>
        {selectOptions.map((item) => (
          <option value={item.value} key={item.value} defaultValue={formik.values.nationality === item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {console.log(formik.values)}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectComponent;
