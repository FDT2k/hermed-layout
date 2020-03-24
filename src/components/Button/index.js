import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className,contained,text,outlined,fit, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !outlined ) ? "contained": "",
    {
      'contained':_=>contained === true,
      'text':_=>text === true,
      'outlined':_=>outlined === true,
      'fit':_=>fit === true,
    }

  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
