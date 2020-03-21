import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {label, id,className, type, ...rest} = props
  return (
    <div className="single-input flex flex-column">
      <label htmlFor={id}>{label}</label>
      <input className={
          cEx([
            "input",
            _=> className
          ])
        } id={id} type="text" {...rest}/>
    </div>
  )
}
