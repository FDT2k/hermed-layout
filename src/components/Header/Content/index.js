import React from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {

  const {className} = props

  const classes = cEx ([
    "headline__content",
    "flex-row",
    "align-center",
    className,
  ])


  return (
      <div className={classes}>
         {props.children}
      </div>)
}
