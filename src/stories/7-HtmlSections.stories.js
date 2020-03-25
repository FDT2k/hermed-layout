import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import WaitingRoom from 'components/WaitingRoom'
import Header from 'components/Header'
import ChatHeaderToolbar from 'components/ChatHeaderToolbar'



import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const WaitingRoomToolBar  = props => {

  return (
    <>
    <button className="button text icon icon--32"><MdVideocam/></button>
    <button className="button text icon icon--32"><MdLocalPhone/></button>
    <button className="button text icon icon--32"><MdLocalPhone/></button>
    <button className="button text icon icon--32"><MdLocalPhone/></button>
    </>
  )
}


export const SingleHeader =()=>
  <ThemePicker picked="chat">
    <Header title="Waiting Room" />
  </ThemePicker>

export const WaitingRoomHeader =()=>
  <ThemePicker picked="chat">
    <Header title="Waiting Room"  Toolbar={WaitingRoomToolBar}/>
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
