import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Button from '../Button'
import { MdArrowBack } from "react-icons/md";

export default props => {

  const {className,handleBack} = props

  const classes = cEx ([
    className,
  ])
  return (
      <>
        {handleBack && <Button toolbar onClick={handleBack}><MdArrowBack/></Button>}
      </>
  )
}
