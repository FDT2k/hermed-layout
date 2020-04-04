import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'
import Sidebar from 'components/Sidebar'
import List from 'components/Sidebar/List';
import ListItem from 'components/Sidebar/List/Item';

import { MdVideocam } from "react-icons/md";


export const PatientChat = () => {
  const [visible,setVisible] = useState(true)
  return (<div className="theme-blue-light">
  <MobileVHAdapter>
    <Sidebar closed={!visible}>
      <List>
      <ListItem Icon={MdVideocam}> Coucou </ListItem>
      <ListItem Icon={MdVideocam}> Coucou </ListItem>
      <ListItem Icon={MdVideocam}> Coucou </ListItem>
      <ListItem Icon={MdVideocam}> Coucou </ListItem>
      <ListItem Icon={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam} Optional={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam}> Coucou </ListItem>
          <ListItem Icon={MdVideocam}> Coucou </ListItem>

      </List>
    </Sidebar>

    <button onClick={_=>setVisible(!visible)} style={{position:'absolute','left':'300px'}}>toggle</button>
    </MobileVHAdapter>
  </div>
)
};

export default {
  title: 'AppViews/Sidebar',
};
