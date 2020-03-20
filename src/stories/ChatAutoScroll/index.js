import React,{useEffect,useState,useRef} from 'react';

import Chat from 'components/Chat'
import ChatBubble from 'components/ChatBubble'

const renderchats = count => {
  const empty = new Array(count).fill(0,0,count);

  const chats =  empty.map(item=>{
    return <ChatBubble message={item}/>
  });
  return chats
}

export default props => {
  const [count,setCount] = useState(0)
  //const countRef = useRef(count);
//  countRef.current = count;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count+1);
    },500);
    return () => clearTimeout(timer);
  },[count]);

  return (<div className="theme-chat">
    <Chat autoscroll>
    {count}
    {renderchats(count)}

    </Chat>
  </div>)
}
