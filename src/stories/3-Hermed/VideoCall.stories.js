import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';


import Fullscreen from 'containers/Fullscreen'
import Modal from 'containers/Modal'
import LayoutFlex from 'layouts/Flex'

import Video from 'components/Video'
import Draggable from 'react-draggable'
import VideoCallLayout from 'layouts/VideoCall'
import { MdCall, MdCallEnd } from 'react-icons/md'
import Button from 'components/Button'


import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import {makeThemeSelect} from 'stories/theme-knobs'
 
export default {
  title: "Hermed/VideoCall",
  decorators: [withKnobs]
};

export const AnsweringCallHDVideo = () =>
  <div className="theme-blue-light">
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
<div className="theme-blue-light">
  <Fullscreen>

    <VideoCallLayout>
      <LayoutFlex className="layout-flex--aspect-fit">
        <Video autoPlay loop src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" />
          <LayoutFlex  className="layout-flex--evenly" style={{position:'absolute'}}>
              <Button round><MdCall/></Button>
              <Button round><MdCallEnd/></Button>
          </LayoutFlex>
      </LayoutFlex>
      <LayoutFlex className="layout-flex--evenly">
        <Button fit>hey</Button>
        <Button fit>hey</Button>
      </LayoutFlex>
    </VideoCallLayout>
    <Draggable bounds='.answer_call'>
      <Video preview autoPlay loop src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" />
    </Draggable>
  </Fullscreen>
</div>
