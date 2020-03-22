
import React from 'react'
import Button from '../Button'

export default props => {
  const {who} = props;

  return (
    <div className="landing-page landing-page--customer flex flex-column just-between">
      <header className="grow-1">
      </header>
      <section className="grow-1 flex-column align-center content-container">
        <h1>Bienvenue</h1>
        <p className="text--center">
          {props.who || 'Le Dr. XXX' } vous invite à rejoindre sa salle d'attente pour une consultation à distance. Lorsque vous êtes prêts, cliquez sur le bouton ci-dessous pour la rejoindre.
        </p>
        {props.children}
      </section>

    </div>
  )
}
