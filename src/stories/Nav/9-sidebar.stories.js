import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';
import Fullscreen from 'containers/Fullscreen'
import Sidebar from 'components/Sidebar'
import SidebarModal from 'components/Sidebar/Modal'
import List from 'components/Sidebar/List';
import LayoutFlex from 'layouts/Flex';
import ListItem from 'components/Sidebar/List/Item';
import { Videocam, Gear } from "components/Icons";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'
import BackgroundOverlay from 'components/BackgroundOverlay';

export default {
  title: "Navigation/Sidebar",
  decorators: [withKnobs]
};

export const SidebarWithBackground = () => {
  const [visible, setVisible] = useState(true)
  return (<div className={makeThemeSelect()}>
    <Fullscreen>
      <BackgroundOverlay>
        <Sidebar closed={!visible}>
          <List>
            <ListItem Icon={Videocam}> <h2>Coucou</h2> </ListItem>
            <ListItem Icon={Videocam}> <h2>Coucou</h2> </ListItem>
            <ListItem Icon={Videocam}> <h2>Coucou</h2> </ListItem>
            <ListItem
              Icon={Videocam}
              Optional={Gear}> <h2>Coucou</h2> </ListItem>
          </List>
        </Sidebar>
      </BackgroundOverlay>
      <button onClick={_ => setVisible(!visible)} style={{ position: 'fixed', 'right': '0px' ,'top':'0px'}}>toggle</button>
    </Fullscreen>
  </div>
  )
};

export const SidebarAsModal = () => {
  const [visible, setVisible] = useState(true)
  return (<div  className={makeThemeSelect()}>
    <Fullscreen>
      <SidebarModal closed={!visible} handleClick={_=> setVisible(false)}>
          <List>
            <ListItem handleClick={_=> alert('wiiii')} Icon={Videocam}> <h2>Coucou</h2> </ListItem>
            <ListItem Icon={Videocam}> <h2>Coucou</h2> </ListItem>
            <ListItem Icon={Videocam}> <h2>Coucou</h2> </ListItem>
            <ListItem
              Icon={Videocam}
              Optional={Gear}> <h2>Coucou</h2> </ListItem>
          </List>
       </SidebarModal>
       <LayoutFlex cover column> 
       <h1>hoho </h1>
        <List className="list--cover list--debug" >
          <ListItem><h2>pipou</h2>pouet</ListItem>
          <ListItem>pouet</ListItem>
          <ListItem>pouet</ListItem>
          <ListItem>pouet</ListItem>
          <ListItem>pouet</ListItem>
        </List>
       </LayoutFlex>
      <button onClick={_ => setVisible(!visible)} style={{ position: 'fixed', 'right': '0px' ,'top':'0px'}}>toggle</button>
    </Fullscreen>
  </div>
  )
};