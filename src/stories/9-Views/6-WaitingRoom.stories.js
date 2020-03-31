import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import WaitingRoom from 'components/WaitingRoom'
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



export const  AvecPatients =()=>
    <div className="theme-chat">
      <MobileVHAdapter>
      <WaitingRoom>
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch"/>
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
