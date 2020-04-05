import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import {makeThemeSelect} from 'stories/theme-knobs'
 
export default {
  title: "Base",
  decorators: [withKnobs]
};

export const  HTag =()=>
    <div className={makeThemeSelect()}>
    <h1>H1 - Hello</h1>
    <h2>H2 - Hello</h2>
    <h3>H3 - Hello</h3>
    <h4>H4 - Hello</h4>
    <h5>H5 - Hello</h5>
    <h6>Hello</h6>

    <p>I'm a paragraph</p>
    <span>Span</span>
    <div>Span</div>

    <b>bold text</b>
    <i>bold text</i>
    </div>
