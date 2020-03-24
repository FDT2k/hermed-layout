import React,{useState,useEffect} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {picked} = props
  const [theme,setTheme] = useState()

  useEffect(()=>{
    console.log(theme,picked)
    if(!theme){
      setTheme(picked || 'landing')
    }
  },[])
  return (
    <div className="theme-picker">
     <label htmlFor="theme">pick a theme:</label>
     <select id="theme" defaultValue={theme} value={theme} onChange={e=>setTheme(e.target.value)}>
        <option value="chat">chat</option>
        <option value="landing">landing</option>
        <option value="">no theme</option>
      </select>
      <div className={cEx([
        'themed-content',
        _=> `theme-${theme}`
        ])}>
        {props.children}
      </div>
    </div>
  )
}
