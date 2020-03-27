import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className,contained,text,outlined,toolbar,fit, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !outlined  && !toolbar) ? "contained": "",
    _=> (toolbar === true) ? 'icon icon--32': '',
    {
      'contained':_=>contained === true,
      'text':_=>text === true ,
      'toolbar': _=> toolbar===true,
      'outlined':_=>outlined === true,
      'fit':_=>fit === true,
    }

  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
