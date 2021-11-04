import React from 'react';
const RadioButton = ({radioOption,name,formik}) => {
    return ( 
        <div className="radioBtn">
           { radioOption.map((item)=>{
            return(<React.Fragment key={item.value}>
                <input
                type="radio"
                id={item.value}
                name={name}
                value={item.value}
                onChange={formik.handleChange}
                checked={formik.values.gender === item.value}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </React.Fragment>)
          
            })}
        </div>
     );
}
 
export default RadioButton;