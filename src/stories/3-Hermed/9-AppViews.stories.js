import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import Fullscreen from 'containers/Fullscreen'

import ThemePicker from 'components/ThemePicker'
import Calling from 'components/Calling'
import Video from 'components/Video'
import Draggable from 'react-draggable'
import ChatHeader from 'components/Header/Chat';
import ActiveCallBar from 'components/ActiveCallBar';
import VideoCallLayout from 'layouts/VideoCall'
import {MdCall,MdCallEnd} from 'react-icons/md'
import Button from 'components/Button'
export const  AnsweringCall =()=>
      <div className="theme-blue-light">
      <Fullscreen>
        <VideoCallLayout>
        
          <div className="video-sample">
            <video autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4"/>
            <div className="toolbox">
            <Button round  success fit> <MdCall/> </Button>
            <Button round fit failure > <MdCallEnd/> </Button>
          </div>
          </div>
        
          
          </VideoCallLayout>
          <Draggable  bounds='.answer_call'>
            <Video preview autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4" />
          </Draggable>
       </Fullscreen>
          </div>          
export default {
  title: 'Views/VideoCall',
};
