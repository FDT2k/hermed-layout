import React,{useState} from 'react'
import { cEx } from '@geekagency/gen-classes'
import { compose, filterPropStartingWith, wrapComponent, applyModifiers, withBaseClass, bem, sectionElement, divElement } from 'utils';

import { Hamburger } from "components/Icons";
import BaseHeader from 'components/Header'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'

import DefaultToolbar from 'components/WaitingRoom/Toolbar';



const Content = (props) => {
  const { children, handleClick, ...rest } = props;
  return (
    <section {...rest}>
      {children}
      {React.Children.toArray(children).length === 0 && <div className="empty-list">
        Aucun contact
        <Button onClick={handleClick}>Inviter un contact</Button>
      </div>}
    </section>
  )
}

const Header = props => {
  const {className,handleBack,title,Toolbar,displayToolbar,...rest} = props;
  return (
  <BaseHeader className={className}>
    <LayoutFlex>
      {handleBack &&<Button navbar onClick={handleBack}><Hamburger /></Button>}
      <h2>{title}</h2>
    </LayoutFlex>
    {((Toolbar && displayToolbar &&  <Toolbar {...rest} />) || (displayToolbar && <DefaultToolbar {...rest} />))
    }
  </BaseHeader>)

}


const View = props => {

  const { title, handleBack, Toolbar, handleNewGuest, displayToolbar, ...rest } = props

  const [toolbarProps, remaining] = filterPropStartingWith('toolbar', rest)

  return (
    <div  {...remaining}>
      <WaitingRoomHeader 
        {...toolbarProps} 
        title={title} 
        handleBack={handleBack}
        Toolbar={Toolbar}
        displayToolbar={displayToolbar}  
      />
      <WaitingRoomContent handleClick={handleNewGuest}>
        {props.children}
      </WaitingRoomContent>
    </div>
  )
}

const [__base_class, element, modifier] = bem('waiting-room')
const __content_class = element('content');
const __header_class = element('header');

const WaitingRoomContent = compose(
  withBaseClass(__content_class),
)(Content)

const WaitingRoomHeader = compose(
  withBaseClass(__header_class),
)(Header)

const WaitingRoom = compose(
  withBaseClass(__base_class)
)(View)

export default WaitingRoom;