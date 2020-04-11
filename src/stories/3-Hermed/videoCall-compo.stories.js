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


import VideoCall from 'views/VideoCall';

import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


export default {
  title: "Hermed/VideoCall/view",
  decorators: [withKnobs]
};

export const VideoCallView = () => {


  const valuesCheck = {
    'Mic Enabled': 'mic_muted',
    'Cam Enabled': 'cam_muted',
    SwitchSwitched: 'switch_switched',
    incomingCall:'incoming'
  };
  const optionsCheck = options('Status', valuesCheck, [], { display: 'check' },'Main');

  console.log(optionsCheck)
  return <div className={makeThemeSelect()}>
    <Fullscreen >

      <VideoCall
        toolbarMicroEnabled={optionsCheck.indexOf('mic_muted') > -1}
        toolbarCamEnabled={optionsCheck.indexOf('cam_muted') > -1}
        incoming={optionsCheck.indexOf('incoming') > -1}
        handleAnswer={x=>alert('answer')}
        handleDiscard={x=>alert('discard')}
        videoSrc="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
        feedbackSrc="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
        feedbackMuted
      />

    </Fullscreen>
  </div>
}