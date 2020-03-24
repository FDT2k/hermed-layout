import React from 'react'

import { MdPersonAdd } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa";

export default props => {

  return (

    <div className="waiting-room">

      <header className="flex-row just-between align-center">
        <h2>Votre salle d'attente</h2>
        <div className="parameters-box">
          <button className="button text icon"><MdPersonAdd/></button>
          <button className="button text icon"><GoGear/></button>
          <button className="button text icon"><FaPowerOff/></button>
        </div>
      </header>
      <section className="content">
        {props.children}
      </section>
    </div>
  )
}
