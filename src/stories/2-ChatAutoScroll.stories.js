import React,{useEffect,useState,useRef} from 'react';

import Chat from 'components/Chat'
import ChatBubble from 'components/ChatBubble'
import 'sass/style.scss';


const renderchats = count => {
  const empty = new Array(count).fill(0,0,count);

  const chats =  empty.map(item=>{
    return <ChatBubble message={item}/>
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
    <div className="theme-chat">
      <Chat autoscroll>
        {count}
        {renderchats(count)}

      </Chat>
    </div>)
}




export const ChatSimple = () => (
  <div className="theme-chat">
    <Chat>
      <ChatBubble welcome/>
      <ChatBubble left/>
      <ChatBubble right/>
    </Chat>
  </div>
);

export const AutoScroll = () => (
  <ChatAutoScroll/>
);

export const  Bubble =()=>
    <div className="theme-chat"><ChatBubble/></div>


export default {
  title: 'Chat',
  component: ChatAutoScroll,
};
