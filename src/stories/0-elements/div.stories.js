import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import ChatBubble from 'components/ChatBubble'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import {makeThemeSelect} from 'stories/theme-knobs'
 
export default {
  title: "Base Elements/sections",
  decorators: [withKnobs]
};


export const  Section =()=>
    <div  className={makeThemeSelect()}>
      <div> I'm a div </div>
      <section> I'm a section </section>
      <p>I'm a paragraph</p>
      <span> I'm a Span</span>
    </div>