import React from 'react'


import Badge from 'components/Badge'
import LayoutFlex from 'layouts/Flex'

import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

import { compose, applyModifiers, withBaseClass } from 'utils';


const [__base_class, element, modifier] = bem('user_status')

const UserStatusContainer = compose(
  applyModifiers({ 'alignTop': true }),
  withBaseClass(__base_class)
)(LayoutFlex)

const UserBadge = withBaseClass(element('badge'))(Badge)

const UserNameAndStatus = compose(
  applyModifiers({ 'column': true,'alignStart':true }),
  withBaseClass(element('name'))
)(LayoutFlex)



const UserStatusComponent = props => {
  const { title, subtitle, badge, ...rest } = props
  return (
    <UserStatusContainer {...rest}>
      {badge && <UserBadge status={badge} />}
      <UserNameAndStatus>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </UserNameAndStatus>
    </UserStatusContainer>

  )
}


export default UserStatusComponent