import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className, ...rest} = props

  const classes = cEx ([
    'list',
    className,
  ])
  return (
      <div className={classes}>
        {props.children}
      </div>
  )
}
