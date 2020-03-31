import React,{useEffect,useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'
import InputMask from  'react-input-mask'


export default props => {
  const {label, id,className, labelClassName, inputClassName, type,caretPos, ...rest} = props
  const ref = useRef()
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
      <InputMask ref={ref} className={inputClasses} id={id} type="checkbox" checked="checked" {...rest}/>
      <span class="checkmark"></span>
    </div>
  )
}
