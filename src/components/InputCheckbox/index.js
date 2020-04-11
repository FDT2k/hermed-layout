import React,{useState,useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'
import InputMask from  'react-input-mask'


export default props => {
  const {label, id,className, checked, labelClassName, inputClassName, onClick, type, ...rest} = props
  const cb = useRef();
  const [check,setChecked] =useState(checked)
  const classes = cEx([
    "single-input --checkbox flex-column",
    className
  ])

  const labelClasses = cEx([
   labelClassName
  ])

  const inputClasses = cEx([
    "input",
   inputClassName
  ])

  return (
    <div className={classes}>
      <label htmlFor={id} className={labelClasses}>{label}</label>
      <div className="container"  onClick={_=> { cb.current.click(); setChecked(cb.current.checked);}}>
        <input checked="checked" ref={cb} className={inputClasses} checked={check} id={id} type="checkbox"  {...rest}/>
        <span className="checkmark"></span>
      </div>
    </div>
  )
}
