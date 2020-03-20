import React from 'react'


export default props => {
  const {label,placeholder,name, onChange} = props
  return (
    <div className="single-hermed-input flex flex-column">
      <label htmlFor={name}>{label}</label>
      <input className="hermed-input" id={name} name={name} type="text" placeholder={placeholder}/>
    </div>
  )
}
