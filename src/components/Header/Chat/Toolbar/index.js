import React from 'react'

import Toolbar from 'components/Header/Toolbar'
import Button from 'components/Button'
import { MdVideocam } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default props => {
  const {handleCall,handleVideoCall} = props
  return (
    <Toolbar>
      <Button onClick={handleVideoCall} disabled={typeof handleVideoCall !=='function'} toolbar><MdVideocam/></Button>
      <Button onClick={handleCall} disabled={typeof handleCall !=='function'} toolbar><MdLocalPhone/></Button>
    </Toolbar>
  )
}
