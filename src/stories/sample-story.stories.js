import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import Landing from 'components/Landing'

export const  Bubble =()=>
    <div className="theme-chat"><Landing/></div>


export default {
  title: 'Landing',
  component: Landing,
};
