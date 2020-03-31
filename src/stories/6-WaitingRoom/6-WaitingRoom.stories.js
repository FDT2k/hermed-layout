import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'

export const  Attente =()=>
    <ThemePicker picked="chat">
      <WaitingRoom/>
   </ThemePicker>




export const  AvecPatients =()=>
    <ThemePicker picked="chat">
      <WaitingRoom>
          <Patient/>
          <Patient/>
          <Patient name="Fabien Karsegard"/>
          <Patient/>
          <Button>inviter</Button>
      </WaitingRoom>
    </ThemePicker>


export default {
  title: 'Waiting Room Elements',
};
