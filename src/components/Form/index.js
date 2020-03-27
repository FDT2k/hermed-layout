import React from 'react'
import {cEx} from '@geekagency/gen-classes'

const defaultSubmit = e=>{
  console.warn('you didnt set onSubmit')
  e.preventDefault()
}

export default props => {
  const {className, onSubmit ,...rest} = props


  const _onSubmit  = onSubmit || defaultSubmit
  return (
    <form className={
        cEx([
          "basic-form",
          _=> className,
        ])
      } onSubmit={_onSubmit} {...rest}>
      {props.children}
    </form>
  )
}
