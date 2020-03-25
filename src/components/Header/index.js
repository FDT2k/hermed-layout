import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import 'sass/style.scss';
import { MdArrowBack } from "react-icons/md";


import ChatHeaderStatus from '../ChatHeaderStatus';

import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default props => {

  const {className,doctor,patient, title,subtitle, badge ,handleBack,Toolbar} = props
  const isDoctor= doctor===true || (!doctor && !patient);

  const classes = cEx ([
    "headline",
    "flex-row",
    "just-between",
    "align-center",
    className,
    {
      "headline--patient":  _=> isDoctor !== true,
      "headline--doctor":   _=> isDoctor === true,
    }
  ])

  const badgeClasses= cEx([
    "headline__contact-dot",
    _=> badge
  ])

  return (
    <header className={classes}>
      <div className="headline__title flex-row align-center">
        {handleBack && <button className="button text icon icon--32" onClick={handleBack}><MdArrowBack/></button>}

        <div className="flex-column just-around">
          <ChatHeaderStatus badge={badge} title={title} subtitle={subtitle}/>
        </div>

      </div>

      <div className="headline__tool-box flex-row">
         {Toolbar && <Toolbar/>}

      </div>
    </header>
  )
}
