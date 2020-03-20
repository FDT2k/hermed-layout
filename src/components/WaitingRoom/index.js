import React from 'react'


export default props => {

  return (

    <div className="waiting-room">

      <header>Votre salle d'attente</header>
      <section className="content">
        {props.children}
      </section>
    </div>
  )
}
