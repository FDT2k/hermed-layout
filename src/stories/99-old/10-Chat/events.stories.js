import React,{useEffect,useState,useRef} from 'react';

import Chat from 'views/Chat'
import ChatBubble from 'components/ChatBubble'
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'
import 'sass/style.scss';


const renderchats = count => {
  const empty = new Array(count).fill(0,0,count);

  const chats =  empty.map(item=>{
    return <ChatBubble left message={item}/>
  });
  return chats
}

 const ChatAutoScroll =  props => {
  const [count,setCount] = useState(0)
  //const countRef = useRef(count);
//  countRef.current = count;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count+1);
    },500);
    return () => clearTimeout(timer);
  },[count]);

  return (
      <Chat autoscroll
            showToolbar
            handleCall={_=>alert('calling')}>
        {count}
        <ChatBubble message="this should auto scroll"/>
        {renderchats(count)}

      </Chat>
)
}




export const ChatSimple = () => (
  <ThemePicker picked="blue-light">
    <Chat remoteName="Fabien K" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello prout"/>
      <ChatBubble left message="Lorem hello prout"/>
      <ChatBubble right message="Lorem hello prout"/>
    </Chat>
  </ThemePicker>
);

export const ChatEvents = () => (
  <ThemePicker picked="blue-light">
    <Chat handleSubmit={v=>alert('you sent '+v)}
      remoteName="Fabien K"
      remoteStatus="connecté"
      remoteBadge="online"
      handleBack={x=>x}
      showToolbar
       handleCall={_=>alert('calling')}
       >
          <ChatBubble welcome message="Lorem hello prout"/>
          <ChatBubble left message="Lorem hello prout"/>
          <ChatBubble right message="Lorem hello prout"/>
          <ChatBubble left message="Lorem hello prout"/>
          <ChatBubble right message="Lorem hello prout"/>
          <ChatBubble right message="Lorem hello prout"/>
          <ChatBubble right message="Lorem hello prout"/>
    </Chat>
  </ThemePicker>
);

export const AutoScroll = () => (
  <ThemePicker picked="blue-light">
  <MobileVHAdapter>
    <ChatAutoScroll/>
    </MobileVHAdapter>
  </ThemePicker>

);



export default {
  title: 'Chat/EventsTests',
  parameters: {
    notes: {
      AutoScroll: 'The view should auto scroll',
      ChatEvents: 'The elements should display alerts',
    }
  },
};
