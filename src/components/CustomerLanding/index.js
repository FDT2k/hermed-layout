
import React from 'react'
import Button from '../Button'

export default props => {
  const {who} = props;

  return (
    <div className="customer-landing-page flex flex-column just-between">
      <header className="">
      </header>
      <section className="flex flex-column align-center content-container">
        <h1>Bienvenue</h1>
        <p>
          {props.who || 'Le Dr. XXX' } vous invite à rejoindre sa salle d'attente pour une consultation à distance. Lorsque vous êtes prêts, cliquez sur le bouton ci-dessous pour la rejoindre.
        </p>
        <Button onClick={_=> props.handleClick()}>JE SUIS PRÊT !</Button>
      </section>

    </div>
  )
}
