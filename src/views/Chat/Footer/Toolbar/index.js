import React,{useState, useRef} from 'react'
import {cEx} from '@geekagency/gen-classes'
import {spreadObjectBeginWith} from '@geekagency/composite-js/ReactUtils'
import LayoutFlex from 'layouts/Flex';
import { Camera as CamIcon,AttachFile,Voice } from "components/Icons";

import Button from 'components/Button'

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
        <Button navbar onClick={x=>setCapturePic(true)}  >
          <CamIcon/>
          <h2>photo</h2>
        </Button>
        <Button navbar disabled onClick={_=>fileUploader.current.click()}  >
          <AttachFile/>
          <h2>Fichier</h2>
        </Button>
        <Button navbar onClick={handleAudio}>
          <Voice/>
          <h2>audio</h2>
        </Button>
      </LayoutFlex>

  )
}
