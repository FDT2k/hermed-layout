import React from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {
  const {message,date,right} = props;

  const classes = cEx ([
    'chat-bubble',
    {
      'right':_=>right===true,
      'left':_=>right!==true,
    }

  ])
  return (
    <div className={classes}>
      <div className="message">{message || 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le fau'}</div>
      <div className="date">{date || '11:20'}</div>
    </div>
  )
}
