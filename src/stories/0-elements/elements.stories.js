import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import ChatBubble from 'components/ChatBubble'


export const Tags =()=>
<div className="theme-blue-light">

    <h1>H1 - Hello</h1>
    <h2>H2 - Hello</h2>
    <h3>H3 - Hello</h3>
    <h4>H4 - Hello</h4>
    <h5>H5 - Hello</h5>
    <h6>Hello</h6>

    <p>I'm a paragraph</p>

    <b>bold text</b><br/>
    <i>italic text</i><br/>
    <s>crossed text</s><br/>
    </div>


export default {
  title: 'Base Elements/tags',
};
