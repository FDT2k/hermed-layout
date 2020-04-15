import React from 'react'
import {cEx} from '@geekagency/gen-classes'


import {PersonAdd,Gear,PowerOff} from 'components/Icons';
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'
export default props => {

    const {  className,handleAdd,handleConfig,handleShutdown} = props

    const classes = cEx ([
      className,
    ])
  return (
        <LayoutFlex className={classes}>
          <Button navbar onClick={handleAdd}><PersonAdd/></Button>
          <Button navbar onClick={handleConfig}><Gear/></Button>
          <Button navbar onClick={handleShutdown}><PowerOff/></Button>
        </LayoutFlex>
  )
}
