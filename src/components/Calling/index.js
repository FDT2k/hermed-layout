import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Button from '../Button'


export default props => {
  const{
    incoming,handleAnswer,handleDiscard,className,...rest
  } = props;

  const classes=  cEx(
    ['answer_call',className]
  )
  return (
    <div className={classes} {...rest}>
      <h3>{props.title}</h3>

      <div className="children">
        {props.children}
      </div>
      <div className="toolbox">
        {incoming && <Button onClick={handleAnswer} fit> Répondre </Button>}
        <Button onClick={handleDiscard} outlined fit> Raccrocher </Button>
      </div>
    </div>
  )
}
