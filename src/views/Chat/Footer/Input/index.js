import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'

import Input from 'components/Input'
import LayoutFlex from 'layouts/Flex'

import { ArrowForward } from "components/Icons";
import Button from 'components/Button';
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
          <Button fit  text navbar className="button--send  flex align-center just-center">
            <ArrowForward />
          </Button>
        </LayoutFlex>
      </form>
  )
}
