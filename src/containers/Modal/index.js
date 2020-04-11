import React, { useState, useEffect, useRef } from 'react'

import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class, element, modifier] = bem('container-modal')

export default ({ children, debug,className, cover, bottom, relative, centered, fit, vcenter, hcenter/* fit, vcenter,hcenter, centered , relative, zIndex,*/, ...rest }) => {

  const modalRef = useRef();


  const adapt = () => {
    if (modalRef.current) {
      const parentNode = modalRef.current.parentNode;

      let modalRect = { x: 0, y: 0, height: 0, width: 0 };
      const currentModalRect = modalRef.current.getBoundingClientRect();
      const parentRect = modalRef.current.parentNode.getBoundingClientRect();
      const windowRect = { x: 0, y: 0, height: window.innerHeight, width: window.innerWidth, top: 0, left: 0 }

      if(debug)
        console.table({ parentRect, windowRect });

      const refRect = relative ? parentRect : windowRect;

      if (relative) {
        parentNode.style.position = 'relative';
      }

      if (centered) {
        modalRect.y = (refRect.height / 2) - (currentModalRect.height / 2)
        modalRect.x = (refRect.width / 2) - (currentModalRect.width / 2)
      }

      if (vcenter) {
        modalRect.y = (refRect.height / 2) - (currentModalRect.height / 2)
      }

      if (hcenter) {
        modalRect.x = (refRect.width / 2) - (currentModalRect.width / 2)

      }

      if(debug)
        console.table({ refRect, modalRect })

      if (modalRect.y < 0) {
        modalRect.y = 0;
      }

      if (!bottom) {
        modalRef.current.style.top = `${modalRect.y}px`;
      }
      modalRef.current.style.left = `${modalRect.x}px`;

    }

  }


  useEffect(() => {
    adapt();
  }, [])


  useEffect(() => {
    document.addEventListener('load', adapt);
    window.addEventListener('resize', adapt);
    return () => {
      window.removeEventListener('resize', adapt)
      document.removeEventListener('load', adapt)
    }
  }, [])


  const classes = cEx([
    __base_class,
    {
      [modifier('cover')]: _ => cover,
      [modifier('centered')]: _ => centered,
      [modifier('bottom')]: _ => bottom,
    },
    className
  ])
  return (
    <div className={classes} ref={modalRef} {...rest}>
      {children}
    </div>
  )
}
