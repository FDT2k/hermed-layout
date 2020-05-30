import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className,contained,clear,round,text,outlined,navbar,success,failure,fit, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !clear&& !round && !outlined  && !navbar) ? "contained": "",
    {
      'contained':_=>contained === true,
      'text':_=>text === true ,
      'navbar': _=> navbar===true,
      'outlined':_=>outlined === true,
      'fit':_=>fit === true,
      'round': _=> round ===true,
      'success': _=> success ===true,
      'failure': _=> failure ===true,
      'clear': _=> clear ===true
    },
    _=> (navbar === true ) ? 'button--icon': '',


  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
