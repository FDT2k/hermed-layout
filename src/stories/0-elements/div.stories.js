import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import ChatBubble from 'components/ChatBubble'


export const  Section =()=>
    <div className="theme-blue-light">
      <div> I'm a div </div>
      <section> I'm a section </section>
      <p>I'm a paragraph</p>
      <span> I'm a Span</span>
    </div>

export default {
  title: 'Base Elements/sections',
};
