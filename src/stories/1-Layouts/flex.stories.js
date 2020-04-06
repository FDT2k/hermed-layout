import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import LayoutFlex from 'layouts/Flex'
import Fullscreen from 'containers/Fullscreen'
import 'sass/style.scss';
const FakeContent = props => <div className={props.className} style={{display:'inline-block'}}> {props.children}</div>


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


export const AspectFit = () => (
  <div className="theme-blue-light">
    <Fullscreen>
      <LayoutFlex className="layout-flex layout-flex--between layout-flex--aspect-fit">
         <img src="/4k.jpg"/>
      </LayoutFlex>
    </Fullscreen>
    
  </div>
);


export const AspectFill = () => (
  <div className="theme-blue-light">
    <Fullscreen>
      <LayoutFlex className="layout-flex layout-flex--between layout-flex--aspect-fill">
         <img src="/4k.jpg"/>
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
