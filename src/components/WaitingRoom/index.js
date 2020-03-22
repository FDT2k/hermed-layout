import React from 'react'


export default props => {

  return (

    <div className="waiting-room">

      <header>
        <h2>Votre salle d'attente</h2>
      </header>
      <section className="content">
        {props.children}
      </section>
    </div>
  )
}
