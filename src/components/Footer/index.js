import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className, ...rest} = props

  const classes = cEx ([
    'layout-footer',
    className,
  ])
  return (
      <>
        <footer className={classes} {...rest}>
            {props.children}
        </footer>
      </>
  )
}
