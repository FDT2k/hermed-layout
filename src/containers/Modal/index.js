import React, { useState, useEffect, useRef } from 'react'

import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class, modifier] = bem('container-modal')

export default ({ offset, children, className, cover, fit, centered, zIndex, ...rest }) => {

  const modalRef = useRef();

  if (!offset) {
    offset = 0;
  }


  const adapt = () => {
    if (centered === true) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if (modalRef.current) {
        const rect = modalRef.current.getBoundingClientRect();

        const top = (windowHeight / 2) - (rect.height / 2)
        const left = (windowWidth / 2) - (rect.width / 2)
        modalRef.current.style.top = `${top}px`;
        modalRef.current.style.left = `${left}px`;
      }
    }
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
    {
      [modifier('cover')]: _ => cover,
      [modifier(fit)]: _ => fit,
    },
    className
  ])

  return (
    <div className={classes} ref={modalRef} style={{ zIndex }} {...rest}>
      {children}
    </div>
  )
}
