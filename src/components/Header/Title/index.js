import React from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {

  const {className} = props

  const classes = cEx ([
    className,
  ])
  return (

      <div className={classes}>
         <h2>{props.children}</h2>
      </div>

  )
}
