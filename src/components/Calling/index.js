import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Button from 'components/Button'
import {MdCall,MdCallEnd} from 'react-icons/md'

export default props => {
  const{
    incoming,handleAnswer,handleDiscard,className,...rest
  } = props;

  const classes=  cEx(
    ['answer_call',className]
  )
  return (
    <div className={classes} {...rest}>
      <div className="children">
        {props.children}
      </div>

      <div className="toolbox">
        {incoming && <Button round  success onClick={handleAnswer} fit> <MdCall/> </Button>}
        <Button round fit failure onClick={handleDiscard} > <MdCallEnd/> </Button>
      </div>
    </div>
  )
}
