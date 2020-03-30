import React,{useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const myRef = useRef();
  const{
    className,...rest
  } = props;

  const classes=  cEx(
    ['video-preview',className]
  )

  const onDragStart = (e)=>{
    console.log(e)
  }
  const onDragEnd = (e)=>{
  let shiftX = e.clientX ;
  let shiftY = e.clientY;
    myRef.current.style.top=`${shiftY}px`
    myRef.current.style.left=`${shiftX}px`
  }
  const onDrag = (e)=>{
    console.log(myRef.current.offsetTop)

  }

  return (
    <video ref={myRef} className={classes} draggable="true"  onDrag={onDrag} onDragEnd={onDragEnd} onDragStart={onDragStart} {...rest}/>
  )
}
