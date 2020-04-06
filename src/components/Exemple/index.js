import React, { useState, useEffect, useRef } from 'react'


import {filterPropStartingWith,forwardProps,bem, cEx} from 'utils'

export const [__base_class,modifier] = bem('example-component');

export default ({ className, children , cover,fit, /* other props,*/ ...rest }) => {

  const classes = cEx([
    __base_class,
    {
      [modifier('modifier-1')]: _ => cover,
      [modifier('modifier-2')]: _ => fit,
    },
    className
  ])

  return (
    <div className={classes}  {...rest}>
      {children}
    </div>
  )
}
