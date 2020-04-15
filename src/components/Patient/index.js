import React from 'react'
import { cEx } from '@geekagency/gen-classes'
import Badge from 'components/Badge'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'
import { GoKebabVertical } from 'react-icons/go'
import { compose, applyModifiers, withBaseClass, bem, divElement } from 'utils';

const [BASE_CLASS, element, modifier] = bem('patient-item')


const UserInfo = ({ name, phone, email }) => (<div className="coord">
  <div className="name">{name}</div>
  <div className="phone">{phone}</div>
  <div className="email">{email}</div>
</div>)

const Container  = compose(
  withBaseClass(BASE_CLASS)
)(divElement)


const LeftPart = ({status,contact}) => {
  
  return  <LayoutFlex>
    <Badge status={status} />
    <UserInfo {...contact} />
  </LayoutFlex>
}


const RightPart = ({secondaryStatus,handleClick}) => {
  return  <LayoutFlex>
      <Badge status={secondaryStatus} />
      <Button clear onClick={e => {
        handleClick(e)
        e.stopPropagation()
      }}><GoKebabVertical /></Button>
    </LayoutFlex>
}

const Contact = props => {
  const {
    status,
    contact,
    secondaryStatus,
   
    handleClick,
    className,
    handleContextual,
    ...rest } = props;

  const classes = cEx([
    "patient-item",
    className
  ])


  return (
    <Container onClick={handleClick} {...rest}>
      <LeftPart contact={contact} status={status}/>
      <RightPart status={secondaryStatus} handleClick={handleContextual}/>
    </Container>
  )
}


export default Contact