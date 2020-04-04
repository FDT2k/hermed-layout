import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'

import Grid from '../Grid'
export default props => {

  const {className, ...rest} = props

  const classes = cEx ([
    'layout-video-call',
    'layout-grid--3r',
    className,
  ])
  return (
        <Grid className={classes} {...rest}>
          {props.children}     
        </Grid>
  )
}
