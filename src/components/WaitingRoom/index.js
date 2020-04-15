import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith} from '@geekagency/composite-js/ReactUtils'
import {key} from '@geekagency/composite-js/ObjectUtils'
import {reduce,enlist} from '@geekagency/composite-js'

import { Hamburger } from "components/Icons";
import Header from 'components/Header'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'

import DefaultToolbar from 'components/WaitingRoom/Toolbar';


export default props => {

  const { title, className,handleBack,Toolbar, defaultToolbar, ...rest} = props

  const classes = cEx ([
    "waiting-room",
    className,
  ])

  const [toolbarProps,remaining] =  spreadObjectBeginWith('toolbar',rest)



  return (
    <div className={classes} {...remaining}>
      <Header>
        <LayoutFlex>
            <Button navbar onClick={handleBack}><Hamburger/></Button>
            <h2>{title}</h2>
        </LayoutFlex>
        { ( (Toolbar && <Toolbar {...toolbarProps} />) || (defaultToolbar&& <DefaultToolbar {...toolbarProps}/>) )
        }
      </Header>

      <section className="content">
        {props.children}
        {React.Children.toArray(props.children).length ===0 && <div>
            Aucun contact
            <Button>Inviter un contact</Button>
          </div>}
      </section>
    </div>
  )
}
