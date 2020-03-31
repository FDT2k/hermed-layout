import React from 'react'
import {cEx} from '@geekagency/gen-classes'

import Badge from 'components/Badge'

export default props => {
  const { title,subtitle,badge} = props

  return (

    <div className="flex-column just-around">
        <div className="flex-row align-center">
          {badge &&<Badge status={badge}/>}
          <h2>{title}</h2>
        </div>
        {subtitle && <p className="headline__contact-status">{subtitle}</p>}
    </div>

  )
}
