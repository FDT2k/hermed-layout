import React,{useEffect,useState,useRef} from 'react';
import Modal from 'containers/Modal'
import Fullscreen from 'containers/Fullscreen'
import Flex from 'layouts/Flex'
import 'sass/style.scss';
import './test.scss'



export const Simple = () => (
  <div className="theme-blue-light">
     <Fullscreen>
      <Modal className="container-modal--cover">
        <Flex className="layout-flex--cover layout-flex--centered">
           The screen should cover all the visible area and I should be centered on the viewport
         </Flex>
      </Modal>
      </Fullscreen>

  </div>
);


export default {
  title: 'Containers/Modal',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS:'Here the order should be Header, footer,content',
      NotInOrder:'Here the order should be reversed'
    }
  },
};
