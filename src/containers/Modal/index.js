import React, { useState, useEffect, useRef } from 'react'

import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

export const [__base_class, modifier] = bem('container-modal')

export default ({ offset, children, className, cover, fit, bottom, vcenter,hcenter, centered , relative, zIndex, ...rest }) => {

  const modalRef = useRef();

  if (!offset) {
    offset = 0;
  }
  console.log(relative)

  const adapt = () => {
    if (bottom === true || centered === true || vcenter === true || hcenter===true || cover==true) {

      
      if ( relative !==true) {

        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
              
        const rect = modalRef.current.getBoundingClientRect();
        const top = (windowHeight / 2) - (rect.height / 2)
        const left = (windowWidth / 2) - (rect.width / 2)
        if(centered || vcenter){
          modalRef.current.style.top = `${top}px`;
        }
        if(centered || hcenter){
          modalRef.current.style.left = `${left}px`;
        }
        if(bottom){
          modalRef.current.style.bottom = `0px`;
        }
        if(cover){
          modalRef.current.style.top = `0px`;
          modalRef.current.style.left = `0px`;
        }
      }else if (relative ===true){
        const parentRect = modalRef.current.parentNode.getBoundingClientRect();
        const rect = modalRef.current.getBoundingClientRect();
        const top = (parentRect.height / 2) - (rect.height / 2) + rect.height
        const left = (parentRect.width / 2) - (rect.width / 2)
        if(centered || vcenter){
          modalRef.current.style.top = `${top}px`;
        }
        if(centered || hcenter){
         modalRef.current.style.left = `${left}px`;
        }

        if(bottom){
          modalRef.current.style.top = `${parentRect.y + parentRect.height - rect.height}px`;

        }else{ 

          if(cover){
            modalRef.current.style.top = `${parentRect.y}px`;
            modalRef.current.style.left = `${parentRect.x}px`;
            modalRef.current.style.width = `${parentRect.width }px`
            modalRef.current.style.height = `${parentRect.height }px`
          }
        }

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
      [modifier('fit')]: _ => fit,
      [modifier('bottom')]: _ => bottom,
    },
    className
  ])

  return (
    <div className={classes} ref={modalRef} style={{ zIndex }} {...rest}>
      {children}
    </div>
  )
}
