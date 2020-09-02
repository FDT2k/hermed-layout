import React from 'react'

import { divElement, compose, applyModifiers, withModifiers,withTransformedProps, withBaseClass, cEx,bem } from 'utils';


const [BASE_CLASS, element, modifier] = bem('button')

const button_styles = ['text','navbar','outlined','clear','round']
const button_default_style = 'contained'

const withBaseButtonsModifiers = compose(
  withModifiers(x => modifier(x), [button_default_style,...button_styles,'fit','success','failure'])
)


export const Button = props => {
  const {children,...rest} = props
  return (
    <button {...rest}>{children}</button>
  )
}

const enhance = compose(
  withBaseClass(BASE_CLASS),
  applyModifiers({[button_default_style]:true},button_styles), // if no style, we want it to be contained
  withBaseButtonsModifiers 
)

export default enhance(Button)
/*
export default  props => {
  const {className,contained,clear,round,text,outlined,navbar,success,failure,fit, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !clear&& !round && !outlined  && !navbar) ? "contained": "",
    {
      'contained':_=>contained === true,
      'text':_=>text === true ,
      'navbar': _=> navbar===true,
      'outlined':_=>outlined === true,
      'fit':_=>fit === true,
      'round': _=> round ===true,
      'success': _=> success ===true,
      'failure': _=> failure ===true,
      'clear': _=> clear ===true
    },
    _=> (navbar === true ) ? 'button--icon': '',


  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
*/