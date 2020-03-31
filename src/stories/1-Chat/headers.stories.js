import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'

import ChatHeader from 'components/Header/Chat'

import 'sass/style.scss';



export const Chat =()=>
  <ThemePicker picked="chat">
    <ChatHeader title="Waiting Room" />
  </ThemePicker>


  export const DoctorChatHeader =()=>
    <ThemePicker picked="chat">
      <ChatHeader handleCall={_=>alert('calling ')}  handleVideoCall={_=>alert('video calling ')} handleBack={()=>alert('howdy cowboy!')} doctor subtitle="invited" title="John McAvoy" badge="waiting"   showToolbar/>
    </ThemePicker>


  export const PatientChatHeader =()=>
    <ThemePicker picked="chat">
      <ChatHeader patient subtitle="unavailable" title="John blbo" badge="online"/>
    </ThemePicker>



export default {
  title: 'Chat/Headers',
};
