import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {status} = props;


  return (
    <div className="patient-item">
      <div className={
          cEx([
            'status',
            _=> status || 'unkown'
          ])
        }></div>
      <div className="coord">
        <div className="name">Fabien Karsegard</div>
        <div className="phone">+41 79 000 00 00</div>
        <div className="email">fabien@karsegard.ch</div>
      </div>
    </div>
  )
}
