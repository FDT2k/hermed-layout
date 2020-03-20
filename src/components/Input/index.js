import React from 'react'


export default props => {
  const {label,placeholder,name, onChange} = props
  return (
    <div className="single-hermed-input flex flex-column">
      <label htmlFor="">{label}</label>
      <input className="hermed-input" type="text" placeholder={placeholder}/>
    </div>
  )
}
