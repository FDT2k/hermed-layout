import React from 'react'
import {cEx} from '@geekagency/gen-classes'

import { MdPersonAdd } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa";
import Toolbar from 'components/Header/Toolbar'
import Button from 'components/Button'
export default props => {

    const {  className,handleAdd,handleConfig,handleShutdown} = props

    const classes = cEx ([
      className,
    ])
  return (
        <Toolbar className={classes}>
          <Button toolbar onClick={handleAdd}><MdPersonAdd/></Button>
          <Button toolbar onClick={handleConfig}><GoGear/></Button>
          <Button toolbar onClick={handleShutdown}><FaPowerOff/></Button>
        </Toolbar>
  )
}
