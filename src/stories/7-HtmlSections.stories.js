import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import WaitingRoom from 'components/WaitingRoom'
import Header from 'components/Header'
import ChatHeaderToolbar from 'components/ChatHeaderToolbar'

export const SingleHeader =()=>
  <ThemePicker picked="chat">
    <Header title="Waiting Room" />
  </ThemePicker>

export const DoctorHeader =()=>
  <ThemePicker picked="chat">
    <Header handleBack={()=>alert('howdy cowboy!')} doctor subtitle="invited" title="John McAvoy" badge="waiting"   Toolbar={ChatHeaderToolbar}/>
  </ThemePicker>


export const PatientHeader =()=>
  <ThemePicker picked="chat">
    <Header patient subtitle="unavailable" title="John blbo" badge="online"/>
  </ThemePicker>



export default {
  title: 'Header',
};
