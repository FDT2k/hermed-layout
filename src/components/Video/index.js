import React,{useRef,useEffect} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const myRef = useRef();

  const{
    srcObject,
    className,
    ...rest
  } = props;

  const classes=  cEx(
    [
      'video',
      className,
      {
        'preview': _=> props.preview
      }
    ]
  )


  useEffect(()=>{
    if(srcObject && myRef.current){
      myRef.current.srcObject = srcObject;
    }

  },[srcObject])

  let additionalProps = {
    mute:false
  }

  if(props.preview ===true)
    additionalProps.mute=true

  return (
    <video ref={myRef} className={classes} {...additionalProps} {...rest}/>
  )
}
