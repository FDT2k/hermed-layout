import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'

import Input from 'components/Input'

import DefaultToolbar from 'components/ChatFooter/Toolbar'
import { MdArrowForward } from "react-icons/md";

export default props => {
  const {className,handleChange,handleSubmit,value,...rest} = props

  const classes = cEx ([
    'chat-footer__message-input',
    'flex-row',
    'align-stretch',
    className,
  ])
  return (
      <form className={classes} onSubmit={handleSubmit} >
          <Input name="message" placeholder="message" autoComplete="off" onChange={handleChange} value={value}/>
          <button className="button button--send text icon--32 flex align-center just-center">
            <MdArrowForward/>
          </button>
      </form>
  )
}
