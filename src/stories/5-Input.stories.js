import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import Input from 'components/Input'
import InputChatMessage from 'components/InputChatMessage'
import Select from 'components/Select'
import InputDate from 'components/InputDate'

import ThemePicker from 'components/ThemePicker'


export const  SingleInput =()=>
    <ThemePicker>
      <Input label="Name"/>
    </ThemePicker>

export const  SingleSelect =()=>
    <ThemePicker>
      <Select label="Pick something">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    </ThemePicker>

export const  SingleInputDate =()=>
    <ThemePicker>
      <InputDate label="Date"/>
    </ThemePicker>

export const  SingleInputChatMessage =()=>
    <ThemePicker>
      <InputChatMessage placeholder="Message"/>
    </ThemePicker>

export default {
  title: 'Input',
};
