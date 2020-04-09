import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'

import Input from 'components/Input'
import LayoutFlex from 'layouts/Flex'

import { MdArrowForward } from "react-icons/md";
import {Button} from 'hermed-layout'
export default props => {
  const {className,handleChange,handleSubmit,value,...rest} = props

  const classes = cEx ([
    'chat-footer__message-input',
    
    className,
  ])
  return (
      <form className={classes} onSubmit={handleSubmit} >
        <LayoutFlex alignStretch>
          <Input name="message" placeholder="message" autoComplete="off" onChange={handleChange} value={value}/>
          <Button fit  text toolbar className="button--send  flex align-center just-center">
            <MdArrowForward/>
          </Button>
        </LayoutFlex>
      </form>
  )
}
