import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith} from '@geekagency/composite-js/ReactUtils'


import { MdCameraAlt } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

export default props => {
  const {className,...rest} = props

  const classes = cEx ([
    'chat-footer__tools flex-row just-between',
    className,
  ])

  return (
      <div className={className} {...rest}>
        <button className="button text icon icon--32" >
          <MdCameraAlt/>
          <h2>photo</h2>
        </button>
        <button className="button text icon icon--32">
          <MdAttachFile/>
          <h2>Fichier</h2>
        </button>
        <button className="button text icon icon--32">
          <MdKeyboardVoice/>
          <h2>audio</h2>
        </button>
      </div>

  )
}
