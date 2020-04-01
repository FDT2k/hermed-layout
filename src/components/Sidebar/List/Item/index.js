import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className, Icon,label,Optional, ...rest} = props

  const classes = cEx ([
    'list-item',

    className,
  ])
  return (
      <div className={classes}>
        <div className="list-item-content">
          <div className="list-item__icon">{Icon && <Icon/>}</div>
          <div className="list-item__title">{props.children}</div>
        </div>
        <div className="list-item__optional">{Optional && <Optional/>}</div>
      </div>
  )
}
