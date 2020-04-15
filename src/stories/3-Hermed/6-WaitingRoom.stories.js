import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


import WaitingRoom from 'components/WaitingRoom'
import WaitingRoomToolbar from 'components/WaitingRoom/Toolbar'
import Patient from 'components/Patient'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter';

export default {
  title: "Hermed/WaitingRoom",
  decorators: [withKnobs]
};
export const Attente = () =>
  <div className="theme-blue-light">
    <MobileVHAdapter>
      <WaitingRoom />
    </MobileVHAdapter>

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
  email: "fabien@ditore.ch"
}
export const AvecPatients = () =>
  <div className={makeThemeSelect()}>
    <MobileVHAdapter>
      <WaitingRoom handleBack={_ => alert('hey burger')} Toolbar={Bar}>
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
          contact={sampleUser} />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
          />
      </WaitingRoom>
    </MobileVHAdapter>
  </div>

export const DefaultToolbar = () =>
  <div className="theme-blue-light">
    <MobileVHAdapter>
      <WaitingRoom handleBack={_ => alert('hey burger')} defaultToolbar={true} toolbarHandleAdd={x => x}>
        <Patient handleClick={x_ => alert('hey')} name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Patient name="Fabien Karsegard" phone="+4179 999 99 99" email="fabien@karsegard.ch" />
        <Button>inviter</Button>
      </WaitingRoom>
    </MobileVHAdapter>
  </div>


