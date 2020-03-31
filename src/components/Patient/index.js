import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Badge from 'components/Badge'
import HeaderContent from 'components/Header/Content'
import Button from 'components/Button'
import {GoKebabVertical} from 'react-icons/go'
export default props => {
  const {status, name,phone,email, className, ...rest} = props;

  const classes = cEx([
    "patient-item",
    className
  ])
  return (
    <div className={classes} {...rest}>
      <HeaderContent>
        <Badge className="status" medium status={status}/>
        <div className="coord">
          <div className="name">{name}</div>
          <div className="phone">{phone}</div>
          <div className="email">{email}</div>
        </div>
      </HeaderContent>
      <HeaderContent>

      <Badge className="status" medium status={status}/>
      <Button clear icon ><GoKebabVertical/></Button>
      </HeaderContent>

    </div>
  )
}
