import React from 'react'

import LayoutFlex from 'layouts/Flex'

import Button from 'components/Button'
import { Videocam,LocalPhone } from "components/Icons";

export default props => {
  const {handleCall,handleVideoCall} = props
  return (
    <LayoutFlex>
      <Button navbar onClick={handleVideoCall} disabled={typeof handleVideoCall !=='function'}><Videocam/></Button>
      <Button navbar onClick={handleCall} disabled={typeof handleCall !=='function'}><LocalPhone/></Button>
    </LayoutFlex>
  )
}
