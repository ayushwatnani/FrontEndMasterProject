import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props:any) => {
  const [focused, setFocused] = useState<any>(false);
  const { label, errorMessage, onChange, id, values, ...inputProps } = props;

  const handleFocus = (e: React.ChangeEvent<any>) =>{
    console.log(e.target.value)
    console.log('inputProps', inputProps);
    setFocused(true);
  }

  const checkPassword = (e: React.ChangeEvent<any>) =>{
    console.log('inputProps', inputProps);
    if(values.password === e.target.value){
      setFocused(false);
    }else setFocused(true);
  }

  return (
    <div className='body'>
        <div className="formInput">
            <label>{label}</label>
            <input 
              {...inputProps}
              onBlur={handleFocus}
              onChange={onChange}
              onFocus={() =>
                inputProps.name === "confirmPassword" && {checkPassword}
              }
              focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    </div>
  )
}

export default FormInput