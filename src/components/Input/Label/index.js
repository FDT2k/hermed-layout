import React from 'react'
import {  cEx } from 'utils'
import bem from './style'

const [__base_class, element, modifier] = bem

export default props => {
  const { label, id, className, error, ...rest } = props


  const classes = cEx([
    __base_class,
    // "flex-column",
    className,
    _ => error ? modifier('error') : '',
  ])


  return (
   
      <label htmlFor={id} className={classes} {...rest}>{label}</label>
     
  )
}
