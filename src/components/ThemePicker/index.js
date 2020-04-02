import React,{useState,useEffect} from 'react'
import {cEx} from '@geekagency/gen-classes'


export default props => {
  const {picked} = props
  const [theme,setTheme] = useState()

  useEffect(()=>{
    console.log(theme,picked)
    if(!theme){
      setTheme(picked || 'pink-light')
    }
  },[])
  return (
    <div className="theme-picker">
     <label htmlFor="theme">pick a theme:</label>
     <select id="theme" defaultValue={theme} value={theme} onChange={e=>setTheme(e.target.value)}>
        <option value="blue-light">blue-light</option>
        <option value="pink-light">pink-light</option>
        <option value="default">default</option>
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
