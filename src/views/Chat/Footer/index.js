import React from 'react'
import {compose,applyModifiers,withBaseClass} from 'utils'; 

import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'
import ChatInput from 'views/Chat/Footer/Input'
import LayoutFlex from 'layouts/Flex';

import ChatRecord from 'views/Chat/Footer/Record'
import DefaultToolbar from 'views/Chat/Footer/Toolbar'

const __toolbar_prefix= 'toolbar'
const __input_prefix= 'input'
const __record_prefix= 'record'

const ChatFooter =  props => {
  const {className, recording, record,...afterMainComponent} = props

  const [toolbarProps, notSuitableForToolbar ] = spreadObjectBeginWith(__toolbar_prefix,afterMainComponent);

  const [inputProps, notSuitableForInput ] = spreadObjectBeginWith(__input_prefix,notSuitableForToolbar);
  const [recordProps, rest ] = spreadObjectBeginWith(__record_prefix,notSuitableForInput);
  return (
    <LayoutFlex className={className} {...rest}>
      <DefaultToolbar {...forwardPropsRemovingHeader(__toolbar_prefix,toolbarProps)}/>
      {!recording  && !record && <ChatInput {...forwardPropsRemovingHeader(__input_prefix,inputProps)}/>}
      { (recording || record )&&<ChatRecord recording={recording} record={record} {...forwardPropsRemovingHeader(__record_prefix,recordProps)}/>}
    </LayoutFlex>
  )
}


const ClassedComponent = withBaseClass('chat-footer')
const Layout = applyModifiers({'column':true})

const enhance = compose(ClassedComponent,Layout);

export default enhance(ChatFooter)