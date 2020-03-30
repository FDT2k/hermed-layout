import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import ChatFooter from 'components/ChatFooter'
import WaitingRoom from 'components/WaitingRoom'


export const SingleChatFooter =()=>
  <ThemePicker picked="chat">
    <ChatFooter/>
  </ThemePicker>

export default {
  title: 'Chat/Footer',
};
