import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import WaitingRoom from 'components/WaitingRoom'
import WaitingRoomToolbar from 'components/WaitingRoom/Toolbar'
import Patient from 'components/Patient'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter';

export const  Attente =()=>
      <div className="theme-chat">
        <MobileVHAdapter>
            <WaitingRoom/>
      </MobileVHAdapter>

      </div>

const Bar = _=>{
  return <WaitingRoomToolbar/>
}

export const  AvecPatients =()=>
    <div className="theme-chat">
      <MobileVHAdapter>
        <WaitingRoom handleBack={_=>alert('hey burger')} Toolbar={Bar}>
            <Patient handleContextual={x=>alert('menu')} handleClick={x_=>alert('hey')} name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Button>inviter</Button>
        </WaitingRoom>
      </MobileVHAdapter>
   </div>

export const  DefaultToolbar =()=>
    <div className="theme-chat">
      <MobileVHAdapter>
        <WaitingRoom handleBack={_=>alert('hey burger')} defaultToolbar={true}>
            <Patient handleClick={x_=>alert('hey')} name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
            <Button>inviter</Button>
        </WaitingRoom>
      </MobileVHAdapter>
   </div>


export default {
  title: 'AppViews/Waiting Room',
};
