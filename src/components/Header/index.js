import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import 'sass/style.scss';

import { MdArrowBack } from "react-icons/md";
import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";


export default props => {

  const {className,doctor,patient} = props

  const isDoctor= doctor===true || (!doctor && !patient);

  const classes = cEx ([
    "headline",
    "flex-row",
    "just-between",
    "align-center",
    className,
    {
      "headline--patient": _=>isDoctor !== true,
      "headline--doctor":_=>isDoctor === true,
    }
  ])

  return (
    <header className={classes}>
      <div className="headline__title flex-row align-center">
        <button className="button text icon icon--32"><MdArrowBack/></button>
        <div className="flex-column just-around">
          <div className="flex-row align-center">
            <span className="headline__contact-dot"></span>
            <h2>John Doe</h2>
          </div>
          <p className="headline__contact-status">Connecté</p>
        </div>
      </div>

      <div className="headline__tool-box flex-row">
        <button className="button text icon icon--32"><MdVideocam/></button>
        <button className="button text icon icon--32"><MdLocalPhone/></button>
      </div>
    </header>
  )
}
