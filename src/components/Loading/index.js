import React from 'react'
import {cEx} from '@geekagency/gen-classes'

import ReactLoading from 'react-loading'

export default props => {
  const {label, type,centered,className,inverse} = props
  const classes = cEx ([
    'loading',
    {
      'loading--align-center': _=> centered === true,
      'loading--just-center': _=> centered === true,
      'loading--inverse': _=> inverse === true,
    },
    className

  ])
  return (
    <div className={classes}>
      {label && <h3>{label}</h3>}
      <ReactLoading color="" type={type || "bubbles"}/>
    </div>
  )
}
