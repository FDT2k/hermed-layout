import React,{useState,useEffect, useRef} from 'react'

import {cEx} from '@geekagency/gen-classes'

export default props => {
  let {offset,className,...rest} = props;
  if(!offset){
    offset = 0;
  }
  const [vh, setVh] = useState();

    const adapt = ()=>{

      setVh((window.innerHeight-offset) * 0.01)
    }


  useEffect(()=>{

    adapt();
  },[])


  useEffect(()=>{
    window.addEventListener('resize',adapt);
    return ()=> {
      window.removeEventListener('resize',adapt)
    }
  },[])


  const classes = cEx ([
    'container-fullscreen',
    className
  ])

  return (
    <div className={classes} style={{'--vh': `${vh}px`}}>
      {props.children}
    </div>
  )
}
