import React from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {

  const {classes,className,ex} = props

  const classes = cEx ([
    ...classes
    className,
  ])

  return (<div className={classes}>{props.children}</div>)

}
