import React,{useState} from 'react'


import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class, modifier] = bem('layout-flex')

export default props => {

  const {className, justBetween, justEvenly, alignCenter, justCenter, ...rest} = props

  const classes = cEx ([
   __base_class,
    {
      [modifier('between')]: _=> justBetween,
      [modifier('evenly')]: _=> justEvenly,
      [modifier('center')]: _=> justCenter
    },
    className,
  ])
  return (
      <>
        <div className={classes} {...rest}>
          {props.children}     
        </div>
      </>
  )
}
