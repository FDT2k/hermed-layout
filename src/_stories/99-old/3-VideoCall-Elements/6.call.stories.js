import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import ThemePicker from 'components/ThemePicker'
import Calling from 'components/Calling'
import Video from 'components/Video'
import Draggable from 'react-draggable'
import ChatHeader from 'components/Header/Chat';
import ActiveCallBar from 'components/ActiveCallBar';

export const  AnsweringCall =()=>
    <>
    <ThemePicker picked="blue-light">
          <ChatHeader title="Appel avec Bobybobbob" handleBack={_=>alert('back')}/>
          <Calling  incoming>
            <div className="video-sample">
              <video autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4"/>
            </div>
          </Calling>
          <Draggable  bounds='.answer_call'>
            <Video preview autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4" />
          </Draggable>
    </ThemePicker>

    </>

  export const CallBar=()=>{

    return (
      <ThemePicker picked="blue-light">
      this should be clickable
      <ActiveCallBar onClick={_=>alert('click')}>Bablou</ActiveCallBar>
    </ThemePicker>)
  }

export default {
  title: 'Video Call',
};
