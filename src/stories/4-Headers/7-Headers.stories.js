import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import WaitingRoom from 'components/WaitingRoom'
import Header from 'components/Header'
import HeaderTitle from 'components/HeaderTitle'
import HeaderToolbar from 'components/HeaderToolbar'
import ChatHeader from 'components/ChatHeader'
import Button from 'components/Button'
import ChatHeaderToolbar from 'components/ChatHeaderToolbar'



import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const WaitingRoomToolBar  = props => {

  return (
    <HeaderToolbar>

    <Button toolbar><MdVideocam/></Button>
    <Button toolbar><MdLocalPhone/></Button>
    <Button toolbar><MdVideocamOff/></Button>
    <Button toolbar><MdLocalPhone/></Button>
    </HeaderToolbar>
  )
}


export const WaitingRoomHeader =()=>
  <ThemePicker picked="blue-light">
    <ChatHeader title="Waiting Room"  Toolbar={WaitingRoomToolBar}/>
  </ThemePicker>

export const CustomHeader =()=>
    <ThemePicker picked="blue-light">
      <Header>
        <HeaderToolbar>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
          <Button toolbar><MdVideocam/></Button>
        </HeaderToolbar>
        <HeaderTitle><h2>My Title is fun</h2></HeaderTitle>

      </Header>
      <br/>
      <Header>
          <HeaderTitle><h2>My Title is fun</h2></HeaderTitle>
          <HeaderToolbar>
            <Button toolbar><MdVideocam/></Button>
            <Button toolbar><MdVideocam/></Button>
            <Button toolbar><MdVideocam/></Button>
            <Button toolbar><MdVideocam/></Button>
          </HeaderToolbar>
      </Header>

    </ThemePicker>


export default {
  title: 'Headers',
};
