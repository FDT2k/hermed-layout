import React from 'react';
import { action, notes } from '@storybook/addon-actions';
import Button from 'components/Button'
import Header from 'components/Header'
import Toolbar from 'components/Header/Toolbar'

import 'sass/style.scss';
import { FiArrowRightCircle } from "react-icons/fi";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


export default {
  title: 'Base Elements/boutons',

  decorators: [withKnobs]
};

export const Normal = () => (
  <div className={makeThemeSelect()}>
    <Button >Hello Button</Button>
    <Button outlined>Hello Button</Button>
    <Button text>Hello Button</Button>
  </div>
);


export const Fit = () => (
  <div className={makeThemeSelect()}>
    <Button fit>Hello Button</Button>
    <Button outlined fit>Hello Button</Button>
    <Button text fit>Hello Button</Button>
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


