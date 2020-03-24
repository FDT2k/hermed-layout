import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import WaitingRoom from 'components/WaitingRoom'
import Header from 'components/Header'

export const SingleHeader =()=>
  <ThemePicker picked="chat">
    <Header/>
  </ThemePicker>


export default {
  title: 'Header',
};
