import React from 'react'
import 'sass/style.scss';
import {cEx} from '@geekagency/gen-classes'



export default props => {
  const { title,subtitle, badge} = props
  const badgeClasses= cEx([
    "headline__contact-dot",
    _=> badge
  ])

  return (

    <>
      <div className="flex-row align-center">
        {badge &&<span className={badgeClasses}></span>}
        <h2>{title}</h2>
      </div>
      {subtitle && <p className="headline__contact-status">{subtitle}</p>}
    </>
  )
}
