import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import { action } from '@storybook/addon-actions';
import Input from 'components/Input'
import Form from 'components/Form'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import Landing from 'components/Landing'
import CustomerLanding from 'components/CustomerLanding'
import OrganiserLanding from 'components/OrganiserLanding'
import Calling from 'components/Calling'
import Video from 'components/Video'
import Draggable from 'react-draggable'
import ChatHeader from 'components/ChatHeader';
import MobileVHAdapter from 'components/MobileVHAdapter';
import componentNotes from './doc/CustomerLanding.md';


export const  LandingCustomerCallBackTest =()=>
    <ThemePicker>
      <CustomerLanding handleClick={(val)=>alert('clicked '+val)}/>
    </ThemePicker>

export const  LandingOrganiser =()=>
  <>
    <ThemePicker>
      <OrganiserLanding handleSubmit={x=>action('submit')} handleClick={(val)=>action('cucu')}/>
    </ThemePicker>
  </>

export const  AnsweringCall =()=>
    <>
      <div className="theme-chat">
        <MobileVHAdapter >
        <ChatHeader title="Appel avec Bobybobbob" handleBack={_=>alert('back')}/>
        <Calling  incoming>
          <div className="video-sample">
            <video autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4"/>
          </div>
      </Calling>
      <Draggable  bounds='.answer_call'>
        <Video preview autoPlay loop src="http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4" />
      </Draggable>
      </MobileVHAdapter>
    </div>
    </>


export default {
  title: 'App Full Views',
  parameters: { notes: componentNotes },
};
