import React from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {
  const {message,date,right,left} = props;

  const classes = cEx ([
    'chat-bubble',
    {
      'right':_=>right===true,
      'left':_=>left===true,
      'welcome':_=>!left && !right
    }

  ])
  return (
    <div className={classes}>
      <p>
        {message || ''}
      </p>
      <span className="chat-bubble__date">{date || '-'}</span>
    </div>

  )
}
