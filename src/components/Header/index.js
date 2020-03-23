import React from 'react'
import 'sass/style.scss';


export default props => {

  return (
    <header className="flex-row just-between align-center">
      <h2>Votre salle d'attente</h2>
      <div className="parameters-box">
        <button className="button text icon">X</button>
        <button className="button text icon">Y</button>
        <button className="button text icon">Z</button>
      </div>
    </header>
  )
}
