import React from 'react';
import { action,notes } from '@storybook/addon-actions';
import Button from 'components/Button'
import Header from 'components/Header'
import Toolbar from 'components/Header/Toolbar'

import ThemePicker from 'components/ThemePicker'
import 'sass/style.scss';
import { FiArrowRightCircle } from "react-icons/fi";



export const Normal = () => (
    <ThemePicker>
      <Button >Hello Button</Button>
      <Button outlined>Hello Button</Button>
      <Button text>Hello Button</Button>
    </ThemePicker>
  );


export const Fit = () => (
    <ThemePicker>
      <Button fit>Hello Button</Button>
      <Button outlined fit>Hello Button</Button>
      <Button text fit>Hello Button</Button>
    </ThemePicker>
);



export const ToolbarForHeader = () => (
    <ThemePicker picked="chat">
      <Header>
        <Toolbar>
          <Button toolbar><FiArrowRightCircle/></Button>
          <Button toolbar><FiArrowRightCircle/></Button>
        </Toolbar>
      </Header>
    </ThemePicker>
);



export default {
  title: 'Button',
  parameters: {
    notes: {
      ToolbarForHeader: 'prout',
      test: 'asdgasd'
    }
  },
};
