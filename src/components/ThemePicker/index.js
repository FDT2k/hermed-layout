import React,{useState} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const [theme,setTheme] = useState('landing')
  return (
    <div className="">
     <label for="theme">pick a theme:</label>
     <select id="theme" defaultValue={theme} onChange={e=>setTheme(e.target.value)}>
        <option value="chat">chat</option>
        <option value="landing">landing</option>
        <option value="">no theme</option>
      </select>
      <div className={cEx([
        _=> `theme-${theme}`
        ])}>
        {props.children}
      </div>
    </div>
  )
}
