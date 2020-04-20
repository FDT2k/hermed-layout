import React, { useState, useRef } from 'react'
import { withBaseClass } from 'utils'


export const Checkbox =  props => {
  const {className, checked,  ...rest } = props
  const cb = useRef();
  const [check, setChecked] = useState(checked)
/*   const classes = cEx([
     "input-checkbox",
     className
   ])
 */
  const handleClick = _ => {
    if(cb.current){
      cb.current.click();
      setChecked(cb.current.checked);
    }
  }
  return (
    <div className={className}>
    <div className="container" onClick={handleClick}>
      <input ref={cb} checked={check} type="checkbox"  {...rest} />
      <span className="checkmark"></span>
    </div>
    </div>

  )
}


export default withBaseClass('input-checkbox')(Checkbox)