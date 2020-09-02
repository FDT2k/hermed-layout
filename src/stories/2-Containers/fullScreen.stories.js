
import React,{useEffect,useState,useRef} from 'react';
import 'sass/projects/hermod/style.scss';
import {makeThemeSelect,Containers,Annotate} from 'stories/storybook-utils'

import Fullscreen from 'containers/Fullscreen'


export default Annotate({
  Concept:'Creates a block that is the size of the view port. This should work on desktop && mobile seamlessly',
  Default: 'The red area should cover all the viewport. \n Available modifiers: - overflowY'
},Containers('Fullscreen'));


export const Simple = () => (
  <div className="theme-blue-light">
      <Fullscreen style={{backgroundColor:'red'}}>
         The red screen should cover all the visible area with no scrollbar
      </Fullscreen>
  </div>
);


export const Overflow = () => (
  <div className="theme-blue-light">
      <Fullscreen style={{backgroundColor:'red'}} overflowY>
         The red screen should cover all the visible area with a scrollbar
      </Fullscreen>
  </div>
);

