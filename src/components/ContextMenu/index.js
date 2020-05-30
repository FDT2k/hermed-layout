import React, { useRef,useState, useEffect } from 'react'
import { cEx } from '@geekagency/gen-classes'
import { compose, applyModifiers, withBaseClass, bem, divElement } from 'utils';

import {windowRect,constrainInRect} from '@geekagency/composite-js/Geometry';

import ListItem from 'components/Sidebar/List/Item'


const ContextualMenu =  props => {
  const me = useRef();
  const [visibleState, setVisibleState] = useState(false)
  const { className, handleDiscard, callback, visible, options, ...rest } = props



  const classes = cEx([
    
    _ => visibleState !== true ? 'contextual-menu--state-closed' : '',
    className,
  ])

  const closeme = (e) => {
    setVisibleState(false)
    handleDiscard && handleDiscard()
    e.stopPropagation();
  }
  
  useEffect(() => {
      setVisibleState(visible);
  }, [visible])

  useEffect(() => {
    if (visibleState === true) {
      
      if(me.current){
        let cRect = windowRect(window);
        let rect = constrainInRect( cRect,me.current.getBoundingClientRect())
        me.current.style.top=`${rect.y}px`;
        me.current.style.left=`${rect.x}px`;
      }
      window.addEventListener('click', closeme)
    } else {
      setVisibleState(false)

    }
    return () => {
      window.removeEventListener('click', closeme)
    }
  }, [visibleState])

  return (
    <div ref={me} className={classes} {...rest}>

      {
        options.map(
          item => <ListItem key={item.id} Icon={item.Icon} onClick={e => {

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


export default withBaseClass('contextual-menu')(ContextualMenu)