import React,{useEffect,useState,useRef} from 'react';
import 'sass/projects/hermod/style.scss';
import {makeThemeSelect,Elements,Annotate} from 'stories/storybook-utils'

export default Elements('Base Blocks')


export const BaseBlocks =()=>
    <div  className={makeThemeSelect()}>
      <div> I'm a div </div>
      <section> I'm a section </section>
      <p>I'm a paragraph</p>
      <span> I'm a Span</span>
    </div>