import React,{useState,useEffect} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {

  const {className, closed, ...rest} = props

/*  const [visible,setVisible] = useState(closed || true)

  useEffect(()=>{
    setVisible(closed || true)
  },[closed])
*/
  const classes = cEx ([
    'sidebar',
    _=> closed===true ? 'sidebar--state-closed' : '',
    className,
  ])
  return (
      <aside className={classes} {...rest}>
      {props.children}

      </aside>
  )


}
