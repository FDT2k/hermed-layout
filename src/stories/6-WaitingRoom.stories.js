import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import Button from 'components/Button'

export const  Attente =()=>
    <div className="theme-chat"><WaitingRoom/></div>



export const  AvecPatients =()=>
    <div className="theme-chat">
      <WaitingRoom>
          <Patient/>
          <Patient/>
          <Patient/>
          <Patient/>
          <Button>inviter</Button>
      </WaitingRoom>
    </div>


export default {
  title: 'Waiting room',
};
