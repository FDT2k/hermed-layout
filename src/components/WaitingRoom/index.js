import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith} from '@geekagency/composite-js/ReactUtils'
import {key} from '@geekagency/composite-js/ObjectUtils'
import {reduce,enlist} from '@geekagency/composite-js'

import { GiHamburgerMenu } from "react-icons/gi";
import Header from 'components/Header'
import Content from 'components/Header/Content'
import Title from 'components/Header/Title'
import Button from 'components/Button'

import DefaultToolbar from 'components/WaitingRoom/Toolbar';


export default props => {

  const { title, className,handleBack,Toolbar, defaultToolbar, ...rest} = props
  const classes = cEx ([
    "waiting-room",
    className,
  ])

  const [toolbarProps,remaining] =  spreadObjectBeginWith('toolbar',rest)


  let res = reduce({},(acc,item)=>{
    
    acc[key(item).replace('toolbar','')] = item[key(item)]

    return acc
  },enlist(toolbarProps))

console.log(res)
  return (
    <div className={classes} {...remaining}>
      <Header>
        <Content>
            <Button toolbar onClick={handleBack}><GiHamburgerMenu/></Button>
            <Title>{title}</Title>
        </Content>
        { ( (Toolbar && <Toolbar {...toolbarProps} />) || (defaultToolbar&& <DefaultToolbar {...toolbarProps}/>) )
        }
      </Header>

      <section className="content">
        {props.children}
      </section>
    </div>
  )
}
