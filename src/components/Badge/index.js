import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className, medium,status, ...rest} = props

  const {red,orange,green, ...veryRest} = rest;

  const classes = cEx ([
    'badge-dot',
    className,
    {'medium':_=> medium===true},
    _=> {
        if(red)
            return 'red';
        if(orange)
            return 'orange'
        if(green)
            return 'green'
    },
    _=> status
  ])
  return (
  <span className={classes} {...veryRest}>{props.children}</span>
  )
}
