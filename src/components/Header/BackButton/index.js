import React from 'react'
import {cEx} from '@geekagency/gen-classes'
import Button from 'components/Button'
import { ArrowBack } from "components/Icons";

export default props => {

  const {className,handleBack} = props

  const classes = cEx ([
    className,
  ])
  return (
      <>
        {handleBack && <Button navbar onClick={handleBack}><ArrowBack/></Button>}
      </>
  )
}
