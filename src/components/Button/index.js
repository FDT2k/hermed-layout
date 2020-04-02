import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className,contained,clear,round,text,outlined,toolbar,success,failure,fit, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !clear&& !round && !outlined  && !toolbar) ? "contained": "",
    {
      'contained':_=>contained === true,
      'text':_=>text === true ,
      'toolbar': _=> toolbar===true,
      'outlined':_=>outlined === true,
      'fit':_=>fit === true,
      'round': _=> round ===true,
      'success': _=> success ===true,
      'failure': _=> failure ===true,
      'clear': _=> clear ===true
    },
    _=> (toolbar === true ) ? 'icon icon--32': '',


  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
