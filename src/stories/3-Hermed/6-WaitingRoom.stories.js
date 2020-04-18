import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


import WaitingRoom from 'components/WaitingRoom'
import WaitingRoomToolbar from 'components/WaitingRoom/Toolbar'
import Patient from 'components/Patient'
import SidebarModal from 'components/Sidebar/Modal'
import Fullscreen from 'containers/Fullscreen';
import {Trash} from 'components/Icons'
export default {
  title: "Hermed/WaitingRoom",
  decorators: [withKnobs]
};
export const Attente = () =>
  <div className="theme-blue-light">
    <Fullscreen>
      <WaitingRoom />
    </Fullscreen>

  </div>

const Bar = _ => {
  return <WaitingRoomToolbar />
}

const sampleUser = {
  name: "Fabien Karsegard",
  phone: "+4179 999 99 99",
  email: "fabien@karsegard.ch"
}

const sampleUser2 = {
  name: "Fabien Di Tore",
  email: "fabien@ditore.ch"
}

const sampleUser3 = {
  name: "Fabien Di Tore",
  email: "fabien@ditore.ch",
  birthdate: "24.02.1982"
}
export const AvecPatients = () =>
  <div className={makeThemeSelect()}>
    <Fullscreen>
      <WaitingRoom
        handleBack={_ => alert('hey burger')}
        Toolbar={Bar}
        title="Bonjour"
        displayToolbar>
        <Patient
          status="green"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser} />
        <Patient
          status="red"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser2} />
        <Patient
          status="orange"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser} />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          secondaryStatus="red"
          contact={sampleUser} />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
      </WaitingRoom>
    </Fullscreen>
  </div>

export const DefaultToolbar = () =>
  <div className="theme-blue-light">
    <Fullscreen>
      <WaitingRoom
        handleBack={_ => alert('hey burger')}
        displayToolbar
        toolbarHandleAdd={x => x}>
        <Patient handleClick={x_ => alert('hey')} name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
      </WaitingRoom>
    </Fullscreen>
  </div>



export const WithSideBar = () => {
  const [sb, setSb] = useState(true)

  
  return (
    <div className="theme-blue-light">

      <Fullscreen>
        <WaitingRoom
          handleBack={_ => setSb(!sb)}
          displayToolbar
          toolbarHandleAdd={x => x}>
          <SidebarModal closed={sb} handleClick={_ => setSb(true)}>
            blablou
          </SidebarModal>
          <Patient
            status="whut"
            handleContextual={x => alert('menu')}
            contextualMenu={[{id:'a',label:'Delete'}]}
            handleClick={x_ => alert('hey')}
            contact={sampleUser3}
            
          />
           <Patient
            status="whut"
            handleContextual={x => alert('menu')}
            contextualMenu={[{id:'a',label:'Delete',Icon:Trash},{id:'b',label:'Edit'}]}
            handleClick={x_ => alert('hey')}
            contact={sampleUser3}
            
          />
        </WaitingRoom>
      </Fullscreen>
    </div>

  )
}
