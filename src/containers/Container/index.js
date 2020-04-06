import React,{useState,useEffect, useRef} from 'react'

import {cEx} from '@geekagency/gen-classes'

export default props => {


  const classes = cEx ([
    'container',
    className
  ])

  return (
    <div className={classes} {...rest}>
      {props.children}
    </div>
  )
}
