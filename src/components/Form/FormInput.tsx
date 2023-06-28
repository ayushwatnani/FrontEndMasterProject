import React from 'react'
import './FormInput.css'

const FormInput = (props:any) => {
  return (
    <div className='body'>
        <div className="formInout">
            {/* <label >Username</label> */}
            <input name={props.name} placeholder={props.placeholder} />
        </div>
    </div>
  )
}

export default FormInput