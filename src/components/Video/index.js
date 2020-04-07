import React,{useRef,useEffect} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const myRef = useRef();

  const{
    srcObject,
    className,
    preview,
    ...rest
  } = props;

  const classes=  cEx(
    [
      'video',
      className,
      {
        'video--preview': _=> preview
      }
    ]
  )


  useEffect(()=>{
    if(srcObject && myRef.current){
      myRef.current.srcObject = srcObject;
    }

  },[srcObject])



  return (
    <video ref={myRef} className={classes} {...rest}/>
  )
}
