import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {status, name,phone,email} = props;


  return (
    <div className="patient-item">
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
