import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props:any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.ChangeEvent<any>) =>{
    setFocused(true);
  }
  return (
    <div className='body'>
        <div className="formInput">
            <label>{label}</label>
            <input 
              {...inputProps}
              onBlur={handleFocus}
              onChange={onChange}
              focused={focused.toString()}
              onFocus={() =>
                inputProps.name == 'confirmPassword' && setFocused(true)
              }
            />
        </div>
    </div>
  )
}

export default FormInput