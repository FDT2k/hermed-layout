import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'

import ChatInput from 'components/ChatFooter/Input'
import DefaultToolbar from 'components/ChatFooter/Toolbar'
import { MdArrowForward } from "react-icons/md";

const __toolbar_header= 'toolbar'
const __input_header= 'input'

export default props => {
  const {className,...rest} = props

  const classes = cEx ([
    'chat-footer',
    className,
  ])

  const [toolbarProps, _veryRest ] = spreadObjectBeginWith(__toolbar_header,rest);
  const [inputProps, veryRest ] = spreadObjectBeginWith(__input_header,_veryRest);
  return (
    <footer className={classes} {...veryRest}>
      <DefaultToolbar {...forwardPropsRemovingHeader(__toolbar_header,toolbarProps)}/>
      <ChatInput {...forwardPropsRemovingHeader(__input_header,inputProps)}/>
    </footer>
  )
}
