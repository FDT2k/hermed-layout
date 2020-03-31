import React from 'react'
import {cEx} from '@geekagency/gen-classes'

import { MdPersonAdd } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from 'components/Header'
import Content from 'components/Header/Content'
import Title from 'components/Header/Title'
import Toolbar from 'components/Header/Toolbar'
import Button from 'components/Button'
export default props => {

    const { title, className,handleBack,handleAdd,handleConfig,handleShutdown} = props

    const classes = cEx ([
      "waiting-room",
      className,
    ])
  return (
    <div className={classes}>
      <Header>
        <Content>
            <Button toolbar onClick={handleBack}><GiHamburgerMenu/></Button>
              <Title>{title}</Title>
        </Content>
        <Toolbar>
          <Button toolbar onClick={handleAdd}><MdPersonAdd/></Button>
          <Button toolbar onClick={handleConfig}><GoGear/></Button>
          <Button toolbar onClick={handleShutdown}><FaPowerOff/></Button>
        </Toolbar>
      </Header>
      {/*<header className="flex-row just-between align-center">
        <h2>Votre salle d'attente</h2>
        <div className="parameters-box">
          <button className="button text icon"><MdPersonAdd/></button>
          <button className="button text icon"><GoGear/></button>
          <button className="button text icon"><FaPowerOff/></button>
        </div>
      </header>*/}
      <section className="content">
        {props.children}
      </section>
    </div>
  )
}
