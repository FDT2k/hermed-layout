import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'
import Footer from 'components/Footer';
import ChatInput from 'components/ChatFooter/Input'
import ChatRecord from 'components/ChatFooter/Record'
import DefaultToolbar from 'components/ChatFooter/Toolbar'
import { MdArrowForward } from "react-icons/md";

const __toolbar_prefix= 'toolbar'
const __input_prefix= 'input'
const __record_prefix= 'record'

export default props => {
  const {className, recording, record,...afterMainComponent} = props

  const classes = cEx ([
    'chat-footer',
    className,
  ])


  const [toolbarProps, notSuitableForToolbar ] = spreadObjectBeginWith(__toolbar_prefix,afterMainComponent);

  const [inputProps, notSuitableForInput ] = spreadObjectBeginWith(__input_prefix,notSuitableForToolbar);
  const [recordProps, rest ] = spreadObjectBeginWith(__record_prefix,notSuitableForInput);
  console.log(recordProps,rest)
  return (
    <Footer className={classes} {...rest}>
      <DefaultToolbar {...forwardPropsRemovingHeader(__toolbar_prefix,toolbarProps)}/>
      {!recording  && !record && <ChatInput {...forwardPropsRemovingHeader(__input_prefix,inputProps)}/>}
      { (recording || record )&&<ChatRecord recording={recording} record={record} {...forwardPropsRemovingHeader(__record_prefix,recordProps)}/>}
    </Footer>
  )
}

