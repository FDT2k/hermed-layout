import React,{useState} from 'react'


import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class,element, modifier] = bem('layout-flex')

export default props => {
  const {className,

    cover,

    centered, // align && just Center
    alignCenter, 
    alignStretch,
    alignStart,
    justStretch,
    justBetween, 
    justAround, 
    justEvenly, 
    justCenter,
    justStart,
    justEnd,

    column, 
    columnReverse, 
    row,
    rowReverse,
    ...rest
  } = props

  const classes = cEx ([
   __base_class,
    {
      [modifier('between')]: _=> justBetween,
      [modifier('evenly')]: _=> justEvenly,
      [modifier('center')]: _=> justCenter,
      [modifier('stretch')]: _=> justStretch,
      [modifier('around')]: _=> justAround,
      [modifier('start')]: _=> justStart,
      [modifier('end')]: _=> justEnd,
      [modifier('column')]: _=> column,
      [modifier('column-reverse')]: _=> columnReverse,
      [modifier('row-reverse')]: _=> rowReverse,
      [modifier('align-stretch')]: _=> alignStretch,
      [modifier('align-center')]: _=> alignCenter,
      [modifier('align-start')]: _=> alignStart,
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
