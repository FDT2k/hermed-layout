import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';


import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import {makeThemeSelect} from 'stories/theme-knobs'
 

import Fullscreen from 'containers/Fullscreen'
import Modal from 'containers/Modal'
import LayoutFlex from 'layouts/Flex'

import Video from 'components/Video'
import Draggable from 'react-draggable'
import VideoCallLayout from 'layouts/VideoCall'
import { MdCall, MdCallEnd } from 'react-icons/md'
import Button from 'components/Button'

import {FaMicrophone} from 'react-icons/fa'
import {MdChat,MdVideocam,MdVideocamOff} from 'react-icons/md'


export default {
  title: "Hermed/VideoCall/assembly",
  decorators: [withKnobs]
};

export const AnsweringCallHDVideo = () =>
  <div className={makeThemeSelect()}>
    <Fullscreen>
      <VideoCallLayout>
        <LayoutFlex className="layout-flex--aspect-fit">
          <Video autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4" />
        </LayoutFlex>
        <LayoutFlex justEvenly>
          <Button fit>1</Button>
          <Button fit>2</Button>
        </LayoutFlex>
      </VideoCallLayout>
      <Draggable bounds='.answer_call'>
        <Video preview autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4" />
      </Draggable>
    </Fullscreen>
  </div>





export const AnsweringCallSDVideo = () =>
<div className={makeThemeSelect()}>
  <Fullscreen className="bounds">
    <VideoCallLayout>
      <LayoutFlex className="answer-call" style={{position:'relative'}}> {/*layout-flex--aspect-fit */}
        <Video autoPlay loop src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" />
        <LayoutFlex  justEvenly style={{position:'absolute',bottom:'0px'}} >
            <Button round ><MdCall/></Button>
            <Button round ><MdCallEnd/></Button>
        </LayoutFlex>
      </LayoutFlex>
      <LayoutFlex className="layout-flex--evenly headline navbar navbar--toolbar">
        <Button fit toolbar><MdChat/><h2>Chat</h2></Button>
        <Button fit toolbar><FaMicrophone/><h2>Micro</h2></Button>
        <Button fit toolbar><MdVideocam/><h2>Camera</h2></Button>
        <Button fit toolbar><MdChat/><h2>Switch</h2></Button>
      </LayoutFlex>
    </VideoCallLayout>
    <Draggable bounds='.bounds'>
      <Video preview autoPlay loop src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" />
    </Draggable>
  </Fullscreen>
</div>
