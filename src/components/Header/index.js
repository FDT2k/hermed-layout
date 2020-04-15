import React from 'react'
/*import {cEx} from '@geekagency/gen-classes'

export default props => {

  const {className} = props

  const classes = cEx ([
    "headline",
    "flex-row",
    "just-between",
    "align-center",
    className,

  ])


  return (
    <header className={classes}>
      {props.children}
    </header>
  )
}
*/

import LayoutFlex from 'layouts/Flex'
import {compose,applyModifiers,withBaseClass} from 'utils'; 

const Headline = withBaseClass('headline')
const Layout = applyModifiers({'justBetween':true})
const enhance = compose(Layout,Headline)

export default enhance(LayoutFlex)