import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Badge from 'components/Badge'
import HeaderContent from 'components/Header/Content'
import Button from 'components/Button'
import {GoKebabVertical} from 'react-icons/go'
export default props => {
  const {status,secondaryStatus, name,phone,email, handleClick, className ,handleContextual, ...rest} = props;

  const classes = cEx([
    "patient-item",
    className
  ])

  
  return (
    <div className={classes}  onClick={handleClick} {...rest}>
      <HeaderContent>
        <Badge className="status" medium status={status}/>
        <div className="coord">
          <div className="name">{name}</div>
          <div className="phone">{phone}</div>
          <div className="email">{email}</div>
        </div>
      </HeaderContent>
      <HeaderContent>

        <Badge className="status secondary" medium status={secondaryStatus}/>
        <Button clear onClick={e=>{
          handleContextual(e)
          e.stopPropagation()}}><GoKebabVertical/></Button>
      </HeaderContent>

    </div>
  )
}
