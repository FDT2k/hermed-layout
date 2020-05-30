import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'

import { MdArrowForward } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export default props => {
  const {className,recording,handleDelete,handleSend,record,...rest} = props

  const classes = cEx ([
    'chat-footer__message-input',
    'flex-row',
    'align-stretch',
    className,
  ])
  return (
      <div className={classes} >
          {recording && <div>Enregistrement</div>}
          {!recording && record && <><audio src={record} controls preload={'metadata'} /> 
          
          <button onClick={handleDelete} className="button button--send text icon--32 flex align-center just-center">
            <FaRegTrashAlt/>
          </button>
          <button onClick={handleSend} className="button button--send text icon--32 flex align-center just-center">
            <MdArrowForward/>
          </button>
          </>}
          
      </div>
  )
}
