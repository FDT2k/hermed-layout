import React,{useEffect,useState,useRef} from 'react';
import 'sass/projects/hermod/style.scss';
import {makeThemeSelect,Components,Annotate} from 'stories/storybook-utils'

import {ArrowForward} from 'components/Icons'
import { FiArrowRightCircle } from "react-icons/fi";
import Button from 'components/Button'
import FlexButton from 'components/Button/Flex'

export default Components('Buttons')

export const Normal = () => (
  <div className={makeThemeSelect()}>
    <Button >Contained</Button>
    <FlexButton row><ArrowForward />Contained</FlexButton>
    <FlexButton row spread><ArrowForward />Contained</FlexButton>
    <FlexButton fit row spread><ArrowForward />Contained</FlexButton>
    <FlexButton fit row-reverse spread><ArrowForward  xs/>Contained</FlexButton>
    <FlexButton round ><ArrowForward  xs/></FlexButton>
    <Button outlined>Outlined</Button>
    <Button text>Text</Button>
    
    <Button disabled>Disabled</Button>
    <Button outlined disabled>Disabled Outlined</Button>
    <Button text disabled>Disabled Text</Button>

  </div>
);


export const Fit = () => (
  <div className={makeThemeSelect()}>
    <Button fit>Fit</Button>
    <Button outlined fit>Outlined fit</Button>
    <Button text fit>Text Fit</Button>
  </div>

);



export const ToolbarForHeader = () => (
  <div className={makeThemeSelect()}>
    <div className="scheme-navbar layout-navbar">
      <Button toolbar><FiArrowRightCircle /></Button>
      <Button toolbar><FiArrowRightCircle /></Button>
      <Button toolbar><FiArrowRightCircle /><h2>Hello</h2></Button>
    </div>
  </div>

);
