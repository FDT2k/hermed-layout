import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className,type,contained,text,outlined, ...rest} = props
  return (
    <button className={
        cEx([
          "button",
          _=> (!type && !contained&&!text && !outlined ) ? "contained": "",
          {
            'contained':_=>contained,
            'text':_=>text,
            'outlined':_=>outlined,
          }
        ])
      } {...rest}>{props.children}</button>
  )
}
