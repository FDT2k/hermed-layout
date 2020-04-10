import React, { useEffect, useRef } from 'react'
import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

import Label from './Label'
/* external imports */
import InputMask from 'react-input-mask'

const [__base_class, element, modifier] = bem('single-input');
const [__input_class, inpElement, inpModifier] = bem(element('input'));


export default props => {
  const { label, id, className, type, error, ...rest } = props

  const [{ labelClassName }, notLabelProps] = filterPropStartingWith('label', rest);
  const [{ inputClassName }, notInputProps] = filterPropStartingWith('input', notLabelProps);


  // default type to text 

  const _type = type || 'text'
  const classes = cEx([
    __base_class,
    // "flex-column",
    className,
    _ => error ? modifier('error') : '',
  ])


  const inputClasses = cEx([
    __input_class,
    inputClassName,
    _ => error ? inpModifier('error') : ''
  ])

  return (
    <div className={classes}>
      <Label htmlFor={id} className={labelClassName} error={error} label={label}/>
      {type !== "checkbox" && <InputMask className={inputClasses} id={id} type={_type} autoComplete="off" {...rest} />}
      {type === "checkbox" && <input className={inputClasses} id={id} type={_type} autoComplete="off"  {...rest} />}
    </div>
  )
}
