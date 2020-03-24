import React from 'react'
import 'sass/style.scss';
import {cEx} from '@geekagency/gen-classes'

export default props => {

  const { theme }= props

  return (
    <div className={`theme-${theme}`}></div>
  )
}
