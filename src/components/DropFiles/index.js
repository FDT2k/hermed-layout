import React, { useEffect,useState,useRef } from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {

  const dropRef = useRef(null)

  const [dragging,setDragging] = useState(false)

  const handleDrag = (e) => {
    console.log('handleDrag',e)
    e.preventDefault()
      e.stopPropagation()
  }
  const handleDragIn = (e) => {

    console.log('handleDragIn',e)
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }
  const handleDragOut = (e) => {
    console.log('handleDragOut',e)
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }
  const handleDrop = (e) => {
    console.log('handleDrop',e)
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
    }
  }


  useEffect(()=>{
    let div = dropRef.current
    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('drop', handleDrop)

    return ()=>{
      let div = dropRef.current
      div.removeEventListener('dragenter', handleDragIn)
      div.removeEventListener('dragleave', handleDragOut)
      div.removeEventListener('dragover', handleDrag)
      div.removeEventListener('drop', handleDrop)
    }
  },[])

  const classes = cEx([
    "drag-drop-zone",
    _=> dragging ? 'drop':''
  ])
  return (
    <div ref={dropRef}  className={classes}>
      <div>
        {dragging&& <h1>Lachez pour envoyer le fichier</h1>}
        {props.children}
      </div>
    </div>
  )

}
