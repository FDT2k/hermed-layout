import React from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {className, ...rest} = props
  return (
    <button className={
        cEx([
          _=> className
        ])
      }>contained</button>
  )
}
