import React,{useState} from 'react'


import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class,element, modifier] = bem('layout-flex')

export default props => {

  const {className, justBetween, justEvenly, alignCenter, justCenter,alignStretch,column, ...rest} = props

  const classes = cEx ([
   __base_class,
    {
      [modifier('between')]: _=> justBetween,
      [modifier('evenly')]: _=> justEvenly,
      [modifier('center')]: _=> justCenter,
      [modifier('column')]: _=> column,
      [modifier('align-stretch')]: _=> alignStretch,

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
