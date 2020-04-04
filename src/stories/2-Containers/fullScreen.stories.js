import React,{useEffect,useState,useRef} from 'react';
import Fullscreen from 'containers/Fullscreen'
import 'sass/style.scss';
import './test.scss'



export const Simple = () => (
  <div className="theme-blue-light">
      <Fullscreen >
         The screen should cover all the visible area
      </Fullscreen>
  </div>
);


export default {
  title: 'Containers/Fullscreen',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS:'Here the order should be Header, footer,content',
      NotInOrder:'Here the order should be reversed'
    }
  },
};
