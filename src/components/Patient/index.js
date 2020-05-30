import React, { useState } from 'react'
import { cEx } from '@geekagency/gen-classes'
import Badge from 'components/Badge'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'
import { Kebab } from 'components/Icons'
import { compose, applyModifiers, withBaseClass, bem, divElement } from 'utils';
import ContextMenu from 'components/ContextMenu'


const UserInfo = ({ name, phone, email, birthdate }) => (<LayoutFlex column alignStart>
  <h2>{name}</h2>
  <div className="phone">{phone}</div>
  <div className="email">{email}</div>
  <div className="birthdate">{birthdate}</div>
</LayoutFlex>)



const LeftPart = ({ status, contact, ...rest }) => {
  return (
    <LayoutFlex {...rest}>
      <Badge m status={status} />
      <UserInfo {...contact} />
    </LayoutFlex>
  )
}


const RightPart = ({ status, menu, handleClick, ...rest }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <LayoutFlex {...rest}>
      {status && <Badge m status={status} />}
      {menu && <ContextMenu
        options={menu}
        handleDiscard={_ => setMenuVisible(false)}
        callback={handleClick}
        visible={menuVisible} />}
      <Button clear onClick={e => {
        if (menu) {
          setMenuVisible(!menuVisible)
        } else {
          handleClick && handleClick(e)
        }
        e.stopPropagation()
      }}><Kebab s /></Button>
    </LayoutFlex>
  )
}


const [BASE_CLASS, element, modifier] = bem('patient-item')

const Container = compose(
  withBaseClass(BASE_CLASS),
  applyModifiers({ justBetween: true, alignStretch: true })
)(LayoutFlex)


const ContactInfo = compose(
  withBaseClass(element('contact')),

)(LeftPart)

const ContactMenu = compose(
  withBaseClass(element('toolbar')),

)(RightPart)

const Contact = props => {
  const {
    status,
    contact,
    secondaryStatus,
    handleClick,
    handleContextual,
    contextualMenu,
    ...rest } = props;

  if (handleContextual && contextualMenu) {
    console.warn('handleContextual && contextualMenu are mutually exclusive. Menu is used in priority')
  }
  return (
    <Container onClick={handleClick} {...rest}>
      <ContactInfo contact={contact} status={status} />
      <ContactMenu menu={contextualMenu}  status={secondaryStatus} handleClick={handleContextual} />
    </Container>
  )
}


export default Contact