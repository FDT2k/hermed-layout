import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import Header from 'components/Header'
import Content from 'components/Header/Content'
import Toolbar from 'components/Header/Toolbar'
import Title from 'components/Header/Title'
import ChatHeader from 'components/Header/Chat'
import Button from 'components/Button'



import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const WaitingRoomToolBar  = props => {

  return (
    <Toolbar>

    <Button toolbar><MdVideocam/></Button>
    <Button toolbar><MdLocalPhone/></Button>
    <Button toolbar><MdVideocamOff/></Button>
    <Button toolbar><MdLocalPhone/></Button>
    </Toolbar>
  )
}


export const WaitingRoomHeader =()=>
  <ThemePicker picked="blue-light">
    <ChatHeader title="Waiting Room"  Toolbar={WaitingRoomToolBar}/>
  </ThemePicker>

export const CustomHeader =()=>
    <ThemePicker picked="blue-light">
      <Header>
        <Toolbar>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
        </Toolbar>
        <Content><Title>My Title is fun</Title></Content>

      </Header>
      <br/>
      <Header>
      <Content><Title>My Title is fun</Title></Content>
      <Toolbar>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
        </Toolbar>
      </Header>

    </ThemePicker>


export default {
  title: 'Headers',
};
