import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import Input from 'components/Input'



export const  Empty =()=>
    <div className="theme-chat">
      <Input label="Name"/>
    </div>


export default {
  title: 'Input',
};
