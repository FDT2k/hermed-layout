
import React,{useEffect,useRef,useState} from 'react'

import ChatHeader from 'components/ChatHeader'

// autoScroll


export default props => {
  const {autoscroll,handleChange,handleSubmit} = props;
  const {remoteBadge,remoteName,remoteStatus} = props;
  const {handleCall,handleVideoCall,handleBack,showToolbar} = props;
  const headerProps = {handleCall,handleVideoCall,showToolbar,handleBack}

  const [shouldAutoscroll, setShouldAutoscroll] = useState(true)
  const [inputValue,setInputValue]              = useState('');

  const _handleChange = e => {
    setInputValue(e.target.value);
    handleChange && handleChange(e.target.value);
  }

  const _handleSubmit = e => {
    setInputValue('')
    handleSubmit && handleSubmit(inputValue)
    e.preventDefault();
  }

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
      <ChatHeader  subtitle={remoteStatus} title={remoteName} badge={remoteBadge} {...headerProps}/>

      <section ref={chatRef} className="chat flex-column  align-center"  onTouchStart={holdScroll} onTouchEnd={releaseScroll} onMouseDown={holdScroll} onMouseUp={releaseScroll}>
        {props.children}
      </section>

      <section className="tools">
        <div className="toolbar">
          <button>photo</button>
          <button>file</button>
          <button>voice</button>
        </div>
        <div className="text-input">
          <form onSubmit={_handleSubmit}>
            <input type="text" onChange={_handleChange} value={inputValue}/>
          </form>
        </div>
      </section>
    </div>
  )
}