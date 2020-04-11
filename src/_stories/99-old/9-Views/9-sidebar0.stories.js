import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'
import ContextMenu from 'components/ContextMenu'

import { MdVideocam } from "react-icons/md";


export const PatientChat = () => {
  const [visible,setVisible] = useState(true)
  const [parent,setParent] = useState(null)
  return (<div className="theme-chat">
  <MobileVHAdapter>



    <button onClick={e =>{
        setVisible(!visible)
      }} style={{position:'absolute','left':'300px'}}>toggle

      <ContextMenu id="pataprout" visible={visible} parent={parent} callback={x=>alert('clicked '+x)} options={[
          {
            id:'aaa',
            label:'delete',
            callback:_=>alert('delete')
          },
          {
            id:'bbb',
            label:'save',
          }
        ]}/>
    </button>
    </MobileVHAdapter>
  </div>
)
};

export default {
  title: 'AppViews/Contextual',
};
