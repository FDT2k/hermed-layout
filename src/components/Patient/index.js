import React from 'react'
import { cEx } from '@geekagency/gen-classes'
import Badge from 'components/Badge'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'
import { Kebab } from 'components/Icons'
import { compose, applyModifiers, withBaseClass, bem, divElement } from 'utils';



const UserInfo = ({ name, phone, email,birthdate }) => (<LayoutFlex  column alignStart>
  <h2>{name}</h2>
  <div className="phone">{phone}</div>
  <div className="email">{email}</div>
  <div className="birthdate">{birthdate}</div>
</LayoutFlex>)



const LeftPart = ({ status, contact,...rest }) => {
  return (
    <LayoutFlex {...rest}>
      <Badge m status={status} />
      <UserInfo {...contact} />
    </LayoutFlex>
  )
}


const RightPart = ({ status, handleClick, ...rest }) => {
  return (
    <LayoutFlex {...rest}>
      {status && <Badge m status={status} />}
      <Button clear onClick={e => {
        handleClick(e)
        e.stopPropagation()
      }}><Kebab s/></Button>
    </LayoutFlex>
  )
}


const [BASE_CLASS, element, modifier] = bem('patient-item')

const Container = compose(
  withBaseClass(BASE_CLASS),
  applyModifiers({justBetween:true,alignStretch:true})
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
    ...rest } = props;
  return (
    <Container onClick={handleClick} {...rest}>
      <ContactInfo contact={contact} status={status} />
      <ContactMenu status={secondaryStatus} handleClick={handleContextual} />
    </Container>
  )
}


export default Contact