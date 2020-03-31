import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'
import Chat from 'views/Chat'
import ChatBubble from 'components/ChatBubble';

export const ChatSimple = () => (
  <div className="theme-chat">
  <MobileVHAdapter>
    <Chat remoteName="Fabien K" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </MobileVHAdapter>
  </div>
);

export const DoctorChat = () => (
  <div className="theme-chat">
  <MobileVHAdapter>
    <Chat showToolbar handleBack={_=>alert('going back')} remoteName="Fabien K" remoteBadge="online" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </MobileVHAdapter>
  </div>
);
export const PatientChat = () => (
  <div className="theme-chat">
  <MobileVHAdapter>
    <Chat remoteName="Dr Karsegard" remoteBadge="online" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello"/>
      <ChatBubble left message="Lorem hello"  date="20:39"/>
      <ChatBubble right message="Lorem hello"  date="20:39"/>
    </Chat>
    </MobileVHAdapter>
  </div>
);

export default {
  title: 'AppViews/Chat',
};
