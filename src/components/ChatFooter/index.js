import React from 'react'
import 'sass/style.scss';

import Input from 'components/Input'

import { MdCameraAlt } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

export default props => {

  return (
    <footer className="chat-footer">

      <div className="chat-footer__tools flex-row just-between">
        <button className="button text icon icon--32">
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

      <div className="chat-footer__message-input">
        <Input name="message" placeholder="message" autoComplete="off"/>
        <button className="button button--send text icon--32">
          <MdArrowForward/>
        </button>
      </div>

    </footer>
  )
}
