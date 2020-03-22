import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className,contained,text,outlined, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !outlined ) ? "contained": "",
    {
      'contained':_=>contained === true,
      'text':_=>text === true,
      'outlined':_=>outlined === true,
    }

  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
