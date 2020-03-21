import React from 'react';
import 'sass/style.scss';
import { Link, Route } from "wouter";
import Landing from 'components/CustomerLanding'
import Chat from 'components/Chat'
import ChatBubble from 'components/ChatBubble'
import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import Input from 'components/Input'
import Select from 'components/Select'
import Form from 'components/Form'
import Button from 'components/Button'


/*const slugify = str => str.replace(/\s/g,'_').toLowerCase()
const createMenu = name => ({path:slugify(name),name:name})
*/

//import ChatAutoScroll from 'stories/ChatAutoScroll'


function App() {

  return (
    <>
    <Route path="/">

      <section className="theme-landing">
        <h1>Menu</h1>
        <ul>
          <li><a href="/landing" target="_blank"><h4>Landing</h4></a></li>
          <li><a href="/waiting_room" target="_blank"><h4>WaitingRoom</h4></a></li>
          <li><a href="/waiting_room_patient" target="_blank"><h4>WaitingRoom with Patient</h4></a></li>
          <li><a href="/patient" target="_blank"><h4>Patient</h4></a></li>
          <li>
            <h3>Forms</h3>
            <ul>
              <li><a href="/input" target="_blank"><h4>input</h4></a></li>
              <li><a href="/select" target="_blank"><h4>select</h4></a></li>
              <li><a href="/button" target="_blank"><h4>button</h4></a></li>
              <li><a href="/form" target="_blank"><h4>Form</h4></a></li>
            </ul>
          </li>
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

    <Route path="/input">
      <div className="theme-chat">
        <Input label="Your Name" name="name" placeholder="Enter your name ..."/>
      </div>
    </Route>

    <Route path="/select">
      <div className="theme-chat">
        <Select/>
      </div>
    </Route>

    <Route path="/button">
      <div className="theme-landing">
        <Button>Hello world</Button>
        <Button text>Hello world</Button>
        <Button outlined>Hello world</Button>
      </div>
    </Route>

    <Route path="/form">
      <div className="theme-landing">
        <Form>
          <Input label="Votre nom " name="name" placeholder="Votre nom complet"/>
          <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail"/>
          <Input label="Votre mot de passe" name="name" placeholder="mot de passe"/>
            <Button>Hello world</Button>
            <Button text>Hello world</Button>
            <Button outlined>Hello world</Button>
        </Form>
      </div>
    </Route>

    <Route path="/waiting_room_patient">
      <div className="theme-chat">
        <WaitingRoom>
          <Patient status="success"/>
          <Patient status="error"/>
          <Patient status="warning"/>
          <Patient status="not existing"/>
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
          <ChatBubble right/>
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
