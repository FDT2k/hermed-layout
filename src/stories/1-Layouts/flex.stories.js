import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import LayoutFlex from 'layouts/Flex'
import Fullscreen from 'containers/Fullscreen'
import 'sass/style.scss';
import './test.scss'
const FakeContent = props => <div className={props.className}> {props.children}</div>


export const ExampleSimple = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <LayoutFlex>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
      </LayoutFlex>
    </Fullscreen>
  </div>
);

export const List = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <LayoutFlex className="layout-flex layout-flex--list">
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
      </LayoutFlex>
    </Fullscreen>
  </div>
);

export const SpreadedElements = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <LayoutFlex className="layout-flex layout-flex--between">
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
         <FakeContent> hello </FakeContent>
      </LayoutFlex>
    </Fullscreen>
    
  </div>
);


export default {
  title: 'Layout/Flex',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS:'Here the order should be Header, footer,content',
      NotInOrder:'Here the order should be reversed'
    }
  },
};
