import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import {makeThemeSelect} from 'stories/theme-knobs'
 
import ThemePicker from 'components/ThemePicker'
import FullScreen from 'containers/Fullscreen'
import Chat from 'views/Chat'
import ChatBubble from 'components/ChatBubble';
export default {
  title: "Hermed/Chat/view",
  decorators: [withKnobs]
};
export const ChatSimple = () => (
  <div className="theme-blue-light">
  <FullScreen>
    <Chat dragAndDrop handleDrop={x=>alert(x)} remoteName="Fabien K" remoteStatus="connecté"  remoteBadge="orange">
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </FullScreen>
  </div>
);

export const DoctorChat = () => (
  <div className="theme-blue-light">

  <FullScreen>
    <Chat showToolbar handleBack={_=>alert('going back')} remoteName="Fabien K" remoteBadge="green" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </FullScreen>
  </div>

);
export const PatientChat = () => (
  <div className="theme-blue-light">
  <FullScreen>
    <Chat remoteName="Dr Karsegard" handlePhoto={x=>alert('taken pic')} handleFile={x=>alert(x)} remoteBadge="red" remoteStatus="connecté" handleSubmit={x=>alert(x)} handleSound={x=>alert(x)}>
      <ChatBubble welcome message="Lorem hello"/>
      <ChatBubble left message="Lorem hello"  date="20:39"/>
      <ChatBubble right message="Lorem hello"  date="20:39"/>
    </Chat>
    </FullScreen>
</div>
);

export const PatientChatDisconnected = () => (
  <div className="theme-blue-light">
  <FullScreen>
    <Chat remoteName="Dr Karsegard" handlePhoto={x=>alert('taken pic')} handleFile={x=>alert(x)} remoteBadge="oups" remoteStatus="connecté" handleSubmit={x=>alert(x)} handleSound={x=>alert(x)}>
      <ChatBubble welcome message="Lorem hello"/>
      <ChatBubble left message="Lorem hello"  date="20:39"/>
      <ChatBubble right message="Lorem hello"  date="20:39"/>
    </Chat>
    </FullScreen>
</div>
);
