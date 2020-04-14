
import React, { useEffect, useRef, useState } from 'react'
import { cEx } from '@geekagency/gen-classes'

import ChatHeader from 'views/Chat/Header'
import ChatFooter from 'views/Chat/Footer'
// autoScroll
import { Upload } from 'components/Icons'
import { useVoiceRecorder } from "use-voice-recorder";

export default props => {

  const { autoscroll, dragAndDrop, handleChange, handleSubmit, handlePhoto, handleFile, handleSound } = props;
  const { remoteBadge, remoteName, remoteStatus } = props;
  const { handleCall, handleVideoCall, handleBack, showToolbar } = props;
  const headerProps = { handleCall, handleVideoCall, showToolbar, handleBack }

  const [shouldAutoscroll, setShouldAutoscroll] = useState(true)
  const [inputValue, setInputValue] = useState('');

  const [record, setRecord] = useState();
  const { isRecording, stop: stopRecording, start: startRecording } = useVoiceRecorder((data) => {
    setRecord(window.URL.createObjectURL(data));
  });

  const _handleChange = e => {
    setInputValue(e.target.value);
    handleChange && handleChange(e.target.value);
  }

  const _handleSubmit = e => {
    setInputValue('')
    handleSubmit && handleSubmit(inputValue)
    e.preventDefault();
  }

  const chatRef = useRef();

  const holdScroll = () => {
    setShouldAutoscroll(false)
  }
  const releaseScroll = () => {
    setShouldAutoscroll(true)
  }

  useEffect(() => {
    if (chatRef.current && autoscroll && shouldAutoscroll)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    //  chatRef.current.addEventListener('scroll',()=>console.log('scroll'))

  })


  const handleAudio = () => {
    if (!isRecording) {
      startRecording()
    } else {
      stopRecording()
    }
  }

  const [dragging, setDragging] = useState(false)

  const handleDrag = (e) => {
    console.log('handleDrag', e)
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragIn = (e) => {

    console.log('handleDragIn', e)
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }
  const handleDragOut = (e) => {
    console.log('handleDragOut', e)
    e.preventDefault()
    e.stopPropagation()
    //  setDragging(false)

    setDragging(false)
  }
  const handleDrop = (e) => {
    console.log('handleDrop', e)
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
    }
  }


  useEffect(() => {
    if (dragAndDrop) {
      let div = chatRef.current
      div.addEventListener('dragenter', handleDragIn)
      div.addEventListener('dragleave', handleDragOut)
      div.addEventListener('dragover', handleDrag)
      div.addEventListener('drop', handleDrop)

      return () => {
        let div = chatRef.current
        div.removeEventListener('dragenter', handleDragIn)
        div.removeEventListener('dragleave', handleDragOut)
        div.removeEventListener('dragover', handleDrag)
        div.removeEventListener('drop', handleDrop)
      }
    }
  }, [])
  const classes = cEx([
    _ => dragAndDrop ? "drag-drop-zone" : '',
    "chat",
    "flex-column",
    "align-center",
    _ => dragging ? 'drop' : ''
  ])
  const classesOverlay = cEx([
    "drop_overlay",
    _ => dragging ? 'drop' : ''
  ])
  return (
    <div className="hermed-chat">

      <ChatHeader
        subtitle={remoteStatus}
        title={remoteName}
        badge={remoteBadge}
        {...headerProps}
      />


      <section ref={chatRef} className={classes} onTouchStart={holdScroll} onTouchEnd={releaseScroll} onMouseDown={holdScroll} onMouseUp={releaseScroll}>
        {props.children}
        <div className={classesOverlay}> <h2> lachez pour envoyer </h2> <Upload xl/></div>

      </section>

      <ChatFooter
        recording={isRecording}
        record={record}
        toolbarHandleAudio={handleAudio}
        inputHandleSubmit={_handleSubmit}
        toolbarHandlePhoto={handlePhoto}
        toolbarHandleFile={handleFile}
        recordHandleDelete={x => setRecord(null)}
        recordHandleSend={_ => { handleSound(record); setRecord(null) }}
        inputHandleChange={_handleChange}
        inputValue={inputValue}
      />


    </div>
  )
}
