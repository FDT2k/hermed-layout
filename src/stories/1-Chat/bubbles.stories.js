import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import ChatBubble from 'components/ChatBubble'


export const  Bubble =()=>
    <ThemePicker picked="chat">
      <ChatBubble message="Lorem hello prout"/>
        <ChatBubble left message="Lorem hello prout"/>
      <ChatBubble right message="Lorem hello prout"/>
    </ThemePicker>
    
export default {
  title: 'Chat/Bubble',
};
