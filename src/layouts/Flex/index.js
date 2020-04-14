import React,{useState} from 'react'


import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class,element, modifier] = bem('layout-flex')

export default props => {

  const {className,

    cover,

    centered, // align && just Center
    alignCenter, 
    alignStretch,
    alignTop,

    justBetween, 
    justAround, 
    justEvenly, 
    justCenter,

    column, 
    ...rest
  } = props

  const classes = cEx ([
   __base_class,
    {
      [modifier('between')]: _=> justBetween,
      [modifier('evenly')]: _=> justEvenly,
      [modifier('center')]: _=> justCenter,
      [modifier('around')]: _=> justAround,
      [modifier('column')]: _=> column,
      [modifier('align-stretch')]: _=> alignStretch,
      [modifier('align-center')]: _=> alignCenter,
      [modifier('align-top')]: _=> alignTop,
      [modifier('centered')]: _=> centered,
      [modifier('cover')]: _=> cover,

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
