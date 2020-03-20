
import React,{useEffect,useRef} from 'react'


// autoScroll


export default props => {
  const {who} = props;
  const chatRef = useRef();
  useEffect(()=>{
    if(chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  },[chatRef])

  return (
    <div className="hermed-chat">
      <header>
          Temps d'attente moyen
        <br/>
        <span className="average-time">xx:xx</span>
      </header>
      <section ref={chatRef} className="chat">
        <div className="welcome">
            Bienvenu dans la salle d'attente ! {who || 'Le Dr. XXX '} vous contactera via cette application dès que possible. Ne fermez pas cette fenêtre avant la fin de votre RDV. Les messages sont échangés sans intermédiaire. Tous les messages échangés seront automatiquement effacés en fin de conversation.
        </div>
        <div className="content">
          {props.children}
        </div>
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
