import React, { useState, useEffect, useRef } from 'react'

import { filterPropStartingWith, forwardProps, bem, cEx, modifiersToCeX } from 'utils'

const [__base_class, element,modifier]= bem('container-fullscreen')

export default props => {
  let { offset,overflowY, className, style:otherStyle, ...rest } = props;
  if (!offset) {
    offset = 0;
  }
  const [vh, setVh] = useState();

  const adapt = () => {
    setVh((window.innerHeight - offset) * 0.01)
  }

  useEffect(() => {
    adapt();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', adapt);
    return () => {
      window.removeEventListener('resize', adapt)
    }
  }, [])

  const classes = cEx([
    __base_class,
    _=> overflowY ? modifier('overflow-y'): '',
    className,
  ])

  return (
    <div className={classes} style={{ '--vh': `${vh}px` ,...otherStyle}} {...rest}>
      {props.children}
    </div>
  )
}
