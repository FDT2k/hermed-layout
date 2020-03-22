
import React,{useEffect,useRef,useState} from 'react'


// autoScroll


export default props => {
  const {who, autoscroll} = props;
  const [shouldAutoscroll, setShouldAutoscroll] = useState(true)
  const chatRef = useRef();

  const holdScroll = ()=>{
    setShouldAutoscroll(false)
  }
  const releaseScroll = ()=>{
    setShouldAutoscroll(true)
  }

  useEffect(()=>{
    if(chatRef.current && autoscroll && shouldAutoscroll)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;

  //  chatRef.current.addEventListener('scroll',()=>console.log('scroll'))

  })
  return (
    <div className="hermed-chat">
      <header>
          Temps d'attente moyen
        <br/>
        <span className="average-time">xx:xx</span>
      </header>
      <section ref={chatRef} className="chat flex-column align-center" onTouchStart={holdScroll} onTouchEnd={releaseScroll} onMouseDown={holdScroll} onMouseUp={releaseScroll}>
        {props.children}
      </section>
      <section className="tools">
        <div className="toolbar">
          <button>photo</button>
          <button>file</button>
          <button>voice</button>
        </div>
        <div className="text-input">
          <input type="text" />
        </div>
      </section>
    </div>
  )
}
