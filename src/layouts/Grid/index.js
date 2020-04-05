import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className,layout3r, ...rest} = props

  const classes = cEx ([
    'layout-grid',
    className,
    _=> layout3r ? 'layout-grid--3r': ''
  ])
  return (
      <>
        <div className={classes} {...rest}>
        {props.children}     
        </div>
      </>
  )
}
