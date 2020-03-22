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
        {message || 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le fau'}
      </p>
      <span className="chat-bubble__date">{date || '11:20'}</span>
    </div>

  )
}
