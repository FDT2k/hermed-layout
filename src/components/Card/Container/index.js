import React, { useState, useEffect, useRef } from 'react'


import {filterPropStartingWith,forwardProps,bem, cEx} from 'utils'
import LayoutFlex from 'layouts/Flex'

export const [__base_class,element,modifier] = bem('card-container');



export default ({ className, children , ...rest }) => {

  const classes = cEx([
    __base_class,
    className
  ])

  return (
      <LayoutFlex cover centered className={classes}   {...rest}>
       {children}
      </LayoutFlex>
  )
}
