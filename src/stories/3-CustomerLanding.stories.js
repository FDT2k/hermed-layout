import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import CustomerLanding from 'components/CustomerLanding'

export const  Landing =()=>
    <div className="theme-chat"><CustomerLanding/></div>

export const  Callback =()=>
    <div className="theme-chat"><CustomerLanding handleClick={()=>alert('clicked')}/></div>


export default {
  title: 'Landing',
  component: CustomerLanding,
};
