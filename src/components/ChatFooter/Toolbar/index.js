import React,{useState, useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith} from '@geekagency/composite-js/ReactUtils'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { MdCameraAlt } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

export default props => {
  const {className,handlePhoto,handleFile,handleAudio,...rest} = props
  const [capturePic,setCapturePic]              = useState(false);

  const fileUploader = useRef();

  
  const _handleFileSelect = e => {
    handleFile && handleFile(e)
  }
  const classes = cEx ([
    "chat-footer__tools",
    "flex-row",
    "just-between",
    className,
  ])
//toolbarHandlePhoto={_=>setCapturePic(true)} toolbarHandleFile={_=>  fileUploader.current.click() } 
  return (
      <div className={classes} {...rest}>
        {capturePic && <Camera onTakePhoto = { x=> {handlePhoto(x); setCapturePic(false)} }/>}
        <input type="file" id="file" ref={fileUploader} onChange={_handleFileSelect} style={{display: "none"}}/>
        <button onClick={x=>setCapturePic(true)} className="button text icon icon--32" >
          <MdCameraAlt/>
          <h2>photo</h2>
        </button>
        <button onClick={_=>fileUploader.current.click()}  className="button text icon icon--32">
          <MdAttachFile/>
          <h2>Fichier</h2>
        </button>
        <button onClick={handleAudio} className="button text icon icon--32">
          <MdKeyboardVoice/>
          <h2>audio</h2>
        </button>
      </div>

  )
}
