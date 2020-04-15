import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'

/*
export default props => {

  const {className, ...rest} = props

  const classes = cEx ([
    'footer',
    className,
  ])
  return (
      <>
        <footer className={classes} {...rest}>
            {props.children}
        </footer>
      </>
  )
}
*/



import LayoutFlex from 'layouts/Flex'
import {compose,applyModifiers,withBaseClass} from 'utils'; 

const Footer = withBaseClass('footer')
const Layout = applyModifiers({'justEvenly':true})

const enhance = compose(Layout,Footer)

export default enhance(LayoutFlex)