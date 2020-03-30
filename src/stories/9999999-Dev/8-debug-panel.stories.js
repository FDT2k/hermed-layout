import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';

import DebugPanel from 'components/DebugPanel'

const Closed = (props)=> {
  return <h3 onClick={props.openHandler}>Am closed lol</h3>
}

const Visible = (props)=> {
  return <h3 onClick={props.closeHandler}>Am Visible lol</h3>
}


export const ToggleComponent =()=>
    <div className="theme-chat">
      <div style={{width:'800px',height:'600px', border:'1px solid red'}}>
      <DebugPanel HiddenComponent={Closed}  VisibleComponent={Visible}/>
      </div>
    </div>


export default {
  title: 'Dev',
};
