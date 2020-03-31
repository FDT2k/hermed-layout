import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const { className,...rest} = props

  const classes=  cEx(
    [
      'active-call',
      className

    ]
  )


  return (
    <div className={classes} {...rest}>{props.children}</div>
  )
}
