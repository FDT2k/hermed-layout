import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Button from '../Button'


export default props => {
  const{
    handleAnswer,handleDiscard,className,...rest
  } = props;

  const classes=  cEx(
    ['answer_call',className]
  )
  return (
    <div className={classes} {...rest}>
      <h3>{props.title}</h3>


      {props.children}

      <Button onClick={handleAnswer}> Repondre </Button>
      <Button onClick={handleDiscard} outlined> Rejeter </Button>
    </div>
  )
}
