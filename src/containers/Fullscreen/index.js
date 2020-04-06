import React, { useState, useEffect, useRef } from 'react'

import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

const [__base_class, modifier]= bem('container-fullscreen')

export default props => {
  let { offset, className, ...rest } = props;
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
    className
  ])

  return (
    <div className={classes} style={{ '--vh': `${vh}px` }}>
      {props.children}
    </div>
  )
}
