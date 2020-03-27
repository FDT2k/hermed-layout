import React from 'react'

import HeaderToolbar from '../HeaderToolbar'
import Button from '../Button'
import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default props => {
  const {handleCall,handleVideoCall} = props
  return (
    <HeaderToolbar>
      <Button onClick={handleVideoCall} disabled={typeof handleVideoCall !=='function'} toolbar><MdVideocam/></Button>
      <Button onClick={handleCall} disabled={typeof handleCall !=='function'} toolbar><MdLocalPhone/></Button>
    </HeaderToolbar>
  )
}
