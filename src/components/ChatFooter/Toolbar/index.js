import React,{useState, useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith} from '@geekagency/composite-js/ReactUtils'
import LayoutFlex from 'layouts/Flex';
import { MdCameraAlt } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";

import {Button} from 'hermed-layout'


import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export default props => {
  const {className,handlePhoto,handleFile,handleAudio,...rest} = props
  const [capturePic,setCapturePic]              = useState(false);

  const fileUploader = useRef();

  
  const _handleFileSelect = e => {
    handleFile && handleFile(e)
  }
  const classes = cEx ([
    "chat-footer__toolbar",
    className,
  ])
  return (
    <LayoutFlex justBetween className={classes} {...rest}>
        {capturePic && <Camera onTakePhoto = { x=> {handlePhoto &&handlePhoto(x); setCapturePic(false)} }/>}
        <input type="file" id="file" ref={fileUploader} onChange={_handleFileSelect} style={{display: "none"}}/>
        <Button toolbar icon onClick={x=>setCapturePic(true)}  >
          <MdCameraAlt/>
          <h2>photo</h2>
        </Button>
        <Button toolbar icon onClick={_=>fileUploader.current.click()}  >
          <MdAttachFile/>
          <h2>Fichier</h2>
        </Button>
        <Button toolbar icon onClick={handleAudio}>
          <MdKeyboardVoice/>
          <h2>audio</h2>
        </Button>
      </LayoutFlex>

  )
}
