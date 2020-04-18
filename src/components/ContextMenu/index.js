import React, { useRef,useState, useEffect } from 'react'
import { cEx } from '@geekagency/gen-classes'

import ListItem from 'components/Sidebar/List/Item'
export default props => {
  const me = useRef();
  const [visibleState, setVisibleState] = useState(false)
  const { className, handleDiscard, callback, visible, options, ...rest } = props

  const _options = options || [];


  const classes = cEx([
    'contextual-menu',
    _ => visibleState !== true ? 'contextual-menu--state-closed' : '',
    className,
  ])

  const closeme = (e) => {
    setVisibleState(false)
    handleDiscard && handleDiscard()
    e.stopPropagation();
  }

  useEffect(() => {
    if (visible) {
      
      setVisibleState(true);
      if(me.current){
       let parentNode = me.current.parentNode;
       let parentRect = {width:window.innerWidth,height:window.innerHeight}
       let rect = me.current.getBoundingClientRect();
       
       console.log(parentRect,rect)
      }
      window.addEventListener('click', closeme)
    } else {
      setVisibleState(false)

    }
    return () => {
      window.removeEventListener('click', closeme)
    }
  }, [visible])

  return (
    <div ref={me} className={classes} {...rest}>

      {
        options.map(
          item => <ListItem Icon={item.Icon} onClick={e => {

            if (item.callback) {
              item.callback(item.id)
            } else {
              callback && callback(item.id)

            }
            e.stopPropagation();

          }}><h2>{item.label}</h2>
          </ListItem>
        )
      }
    </div>
  )
}
