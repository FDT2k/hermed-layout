import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'
import Chat from 'views/Chat'
import ChatBubble from 'components/ChatBubble';

export const ChatSimple = () => (
  <ThemePicker picked="blue-light">
  <MobileVHAdapter>
    <Chat remoteName="Fabien K" remoteStatus="connecté"  remoteBadge="orange">
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </MobileVHAdapter>
  </ThemePicker>
);

export const DoctorChat = () => (
  <ThemePicker picked="blue-light">
  <MobileVHAdapter>
    <Chat showToolbar handleBack={_=>alert('going back')} remoteName="Fabien K" remoteBadge="green" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </MobileVHAdapter>
  </ThemePicker>
);
export const PatientChat = () => (
  <ThemePicker picked="blue-light">
  <MobileVHAdapter>
    <Chat remoteName="Dr Karsegard" remoteBadge="green" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello"/>
      <ChatBubble left message="Lorem hello"  date="20:39"/>
      <ChatBubble right message="Lorem hello"  date="20:39"/>
    </Chat>
    </MobileVHAdapter>
  </ThemePicker>
);

export default {
  title: 'AppViews/Chat',
};
