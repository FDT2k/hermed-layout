import React,{useEffect,useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'
import InputMask from  'react-input-mask'


export default props => {
  const {label, id,className, type,caretPos, ...rest} = props
  const ref = useRef()


  return (
    <div className="single-input flex-column">
      <label htmlFor={id}>{label}</label>
      <InputMask ref={ref} className={
          cEx([
            "input",
            _=> className
          ])
        } id={id} type="text" autoComplete="off" {...rest}/>
    </div>
  )
}
