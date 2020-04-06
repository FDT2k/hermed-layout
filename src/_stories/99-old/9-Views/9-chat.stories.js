import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'
import Chat from 'views/Chat'
import ChatBubble from 'components/ChatBubble';

export const ChatSimple = () => (
  <div className="theme-blue-light">
  <MobileVHAdapter>
    <Chat dragAndDrop handleDrop={x=>alert(x)} remoteName="Fabien K" remoteStatus="connecté"  remoteBadge="orange">
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </MobileVHAdapter>
  </div>
);

export const DoctorChat = () => (
  <div className="theme-blue-light">

  <MobileVHAdapter>
    <Chat showToolbar handleBack={_=>alert('going back')} remoteName="Fabien K" remoteBadge="green" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello "/>
      <ChatBubble left message="Lorem hello "/>
      <ChatBubble right message="Lorem hello "/>
    </Chat>
    </MobileVHAdapter>
  </div>

);
export const PatientChat = () => (
  <div className="theme-blue-light">
  <MobileVHAdapter>
    <Chat remoteName="Dr Karsegard" handlePhoto={x=>alert('taken pic')} handleFile={x=>alert(x)} remoteBadge="green" remoteStatus="connecté" handleSubmit={x=>alert(x)} handleSound={x=>alert(x)}>
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
