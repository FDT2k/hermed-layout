import React,{useState,useEffect} from 'react'
import {cEx} from '@geekagency/gen-classes'

import List from 'components/Sidebar/List'
import ListItem from 'components/Sidebar/List/Item'
export default props => {

  const [visibleState,setVisibleState] = useState(false)
  const {className, pos,callback, visible,options, ...rest} = props

  const _options = options || [];


  const classes = cEx ([
    'contextual-menu',
    _=> visibleState!==true ? 'contextual-menu--state-closed':'',
    className,
  ])

  const closeme = (e)=> {
    setVisibleState(false)
    e.stopPropagation();
  }

  useEffect(()=>{
    if(visible){
      setVisibleState(true)
      window.addEventListener('click',closeme)
    }else{
      setVisibleState(false)

    }
    return ()=>{
      window.removeEventListener('click',closeme)
    }
  },[visible])

  return (
        <div className={classes} {...rest}>

          {
            options.map(
              item => <ListItem Icon={item.Icon} onClick={e=> {

                if(item.callback){
                item.callback(item.id)
                }else{
                  callback && callback(item.id)

                }
                e.stopPropagation();

              }}>{item.label}
              </ListItem>
            )
          }
        </div>
  )
}
