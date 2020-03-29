import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {status, name,phone,email, className, ...rest} = props;

  const classes = cEx([
    "patient-item",
    className
  ])
  return (
    <div className={classes} {...rest}>
      <div className={
          cEx([
            'status',
            _=> status || 'unkown'
          ])
        }></div>
      <div className="coord">
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  )
}
