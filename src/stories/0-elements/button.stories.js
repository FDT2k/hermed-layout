import React from 'react';
import Button from 'components/Button'

import 'sass/projects/hermod/style.scss';

import { FiArrowRightCircle } from "react-icons/fi";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


export default {
  title: 'Base Elements/boutons',

  decorators: [withKnobs]
};

export const Normal = () => (
  <div className={makeThemeSelect()}>
    <Button >Contained</Button>
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
