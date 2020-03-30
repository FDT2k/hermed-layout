import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className, ...rest} = props

  const classes = cEx ([
    'my-super-class',
    className,
  ])
  return (
      <>
        <div className={classes} {...rest}> Example component</div>
      </>
  )
}
