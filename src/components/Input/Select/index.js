import React from 'react'



export default props => {
  const {label,id, className, ...rest} = props
  return (
      <div className="single-select">
        <div className="single-select__select">
          <select id={id} {...rest}>
            {props.children}
          </select>
        </div>
      </div>
  )
}
