import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'
import Footer from 'components/Footer';
import ChatInput from 'components/ChatFooter/Input'
import DefaultToolbar from 'components/ChatFooter/Toolbar'
import { MdArrowForward } from "react-icons/md";

const __toolbar_prefix= 'toolbar'
const __input_prefix= 'input'

export default props => {
  const {className,...afterMainComponent} = props

  const classes = cEx ([
    'chat-footer',
    className,
  ])


  const [toolbarProps, notSuitableForToolbar ] = spreadObjectBeginWith(__toolbar_prefix,afterMainComponent);

  const [inputProps, rest ] = spreadObjectBeginWith(__input_prefix,notSuitableForToolbar);
  return (
    <Footer className={classes} {...rest}>
      <DefaultToolbar {...forwardPropsRemovingHeader(__toolbar_prefix,toolbarProps)}/>
      <ChatInput {...forwardPropsRemovingHeader(__input_prefix,inputProps)}/>
    </Footer>
  )
}

