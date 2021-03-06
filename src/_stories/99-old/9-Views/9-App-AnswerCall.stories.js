import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import Button from 'components/Button'
import Calling from 'components/Calling'
import Video from 'components/Video'
import Draggable from 'react-draggable'
import ChatHeader from 'components/Header/Chat';
import MobileVHAdapter from 'components/MobileVHAdapter';


export const  AnsweringCallAssembly =()=>
      <div className="theme-blue-light">
        <MobileVHAdapter >
          <Calling  incoming>
            <div className="video-sample">
              <Video autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4"/>
            </div>
          </Calling>
          <Draggable  bounds='.answer_call'>
            <Video preview autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4" />
          </Draggable>
        </MobileVHAdapter>
    </div>


export default {
  title: 'AppViews/Calls',
};
