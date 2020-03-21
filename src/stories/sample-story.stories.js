import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import CustomerLanding from 'components/CustomerLanding'

export const  Bubble =()=>
    <div className="theme-chat"><CustomerLanding/></div>


export default {
  title: 'Landing',
  component: CustomerLanding,
};
