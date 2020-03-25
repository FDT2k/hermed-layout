import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import WaitingRoom from 'components/WaitingRoom'
import Header from 'components/Header'

export const SingleHeader =()=>
  <ThemePicker picked="chat">
    <Header/>
  </ThemePicker>

export const DoctorHeader =()=>
  <ThemePicker picked="chat">
    <Header doctor/>
  </ThemePicker>

export const PatientHeader =()=>
  <ThemePicker picked="chat">
    <Header patient/>
  </ThemePicker>

export default {
  title: 'Header',
};
