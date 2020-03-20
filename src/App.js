import React from 'react';
import logo from './logo.svg';
//import './style';
import 'sass/style.scss';
import { Link, Route } from "wouter";
import Catalogue from 'components/Catalogue'
import Landing from 'components/CustomerLanding'
import Chat from 'components/Chat'
import ChatBubble from 'components/ChatBubble'
import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'

/*const slugify = str => str.replace(/\s/g,'_').toLowerCase()
const createMenu = name => ({path:slugify(name),name:name})
*/

function App() {

  return (
    <>
    <Route path="/">

      <section className="theme-light">
        <h1>Menu</h1>
        <ul>
          <li><a href="/catalog" target="_blank"><h4>Catalogue</h4></a></li>
          <li><a href="/landing" target="_blank"><h4>Landing</h4></a></li>
            <li><a href="/waiting_room" target="_blank"><h4>WaitingRoom</h4></a></li>
            <li><a href="/waiting_room_patient" target="_blank"><h4>WaitingRoom with Patient</h4></a></li>
          <li><a href="/patient" target="_blank"><h4>Patient</h4></a></li>
          <li><h3>Chat</h3>
            <ul>
              <li><a href="/chatbubble" target="_blank"><h4>ChatBubble</h4></a></li>
              <li><a href="/chat" target="_blank"><h4>Chat</h4></a></li>
              <li><a href="/chat-with-bubbles" target="_blank"><h4>Chat with bubbles</h4></a></li>
              <li><a href="/chat-autoscroll" target="_blank"><h4>Chat Chat with bubbles - autoscroll test</h4></a></li>
            </ul>
          </li>

        </ul>
      </section>
    </Route>

    <Route path="/catalog"><Catalogue/></Route>
    <Route path="/landing">
      <div className="theme-chat">
          <Landing/>
      </div>
    </Route>
    <Route path="/chat">
      <div className="theme-chat">
        <Chat></Chat>
      </div>
    </Route>


    <Route path="/waiting_room">
      <div className="theme-chat">
        <WaitingRoom/>
      </div>
    </Route>

    <Route path="/waiting_room_patient">
      <div className="theme-chat">
        <WaitingRoom>
          <Patient status="success"/>
          <Patient status="error"/>
          <Patient status="warning"/>
          <Patient/>
          <Patient/>
        </WaitingRoom>
      </div>
    </Route>
    <Route path="/patient">
      <div className="cover theme-chat">
        <Patient/>
      </div>
    </Route>


    <Route path="/chat-with-bubbles">
      <div className="theme-chat">
        <Chat>
          <ChatBubble/>
            <ChatBubble/>
        </Chat>
      </div>
    </Route>
    <Route path="/chat-autoscroll">
      <div className="theme-chat">
        <Chat>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
          <ChatBubble/>
        </Chat>
      </div>
    </Route>
    <Route path="/chatbubble">
      <div className="theme-chat">
        <ChatBubble/>
      </div>
    </Route>
    </>
  );
}

export default App;
