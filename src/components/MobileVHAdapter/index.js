import React,{useState,useEffect, useRef} from 'react'


export default props => {
  let {offset} = props;
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
  return (
    <div className="vh-container" style={{'--vh': `${vh}px`}}>
      {props.children}
    </div>
  )
}
