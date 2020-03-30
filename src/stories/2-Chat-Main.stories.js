import React,{useEffect,useState,useRef} from 'react';

import Chat from 'components/Chat'
import ChatBubble from 'components/ChatBubble'
import ThemePicker from 'components/ThemePicker'
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
  <ThemePicker picked="chat">
    <Chat remoteName="Fabien K" remoteStatus="connecté" >
      <ChatBubble welcome message="Lorem hello prout"/>
      <ChatBubble left message="Lorem hello prout"/>
      <ChatBubble right message="Lorem hello prout"/>
    </Chat>
  </ThemePicker>
);

export const ChatEvents = () => (
  <div className="theme-chat">
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
  </div>
);

export const AutoScroll = () => (
  <ThemePicker picked="chat">
  <ChatAutoScroll/>
  </ThemePicker>

);



export default {
  title: 'Chat',
};
