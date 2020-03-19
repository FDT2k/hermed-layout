
import React from 'react'


export default props => {

  return (
    <div className="hermed-chat">
      <header>
        Temps d'attente moyen
        <br/>
        <span className="average-time">xx:xx</span>
      </header>
      <section className="chat">
        <div className="welcome">
Bienvenu dans la salle d'attente ! Le Dr. XXX vous contactera via cette application dès que possible. Ne fermez pas cette fenêtre avant la fin de votre RDV. Tous les messages échangés seront automatiquement effacés en fin de conversation.
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
