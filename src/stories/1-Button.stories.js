import React from 'react';
import { action,notes } from '@storybook/addon-actions';
import Button from 'components/Button'
import Header from 'components/Header'
import ThemePicker from 'components/ThemePicker'
import 'sass/style.scss';
import componentNotes from './doc/Button.md';
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


export const FitIcon = () => (
    <ThemePicker>
      <Button fit><FiArrowRightCircle/></Button>
      <Button outlined fit><FiArrowRightCircle/></Button>
      <Button text fit><FiArrowRightCircle/></Button>
    </ThemePicker>
);


export const Toolbar = () => (
    <ThemePicker picked="chat">
      <header className="headline">
        <div className="headline__tool-box flex-row">
          <Button toolbar><FiArrowRightCircle/></Button>
          <Button toolbar><FiArrowRightCircle/></Button>
        </div>
      </header>
    </ThemePicker>
);


export const Emoji = () => (
  <ThemePicker>

    <Button >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </ThemePicker>

);

export default {
  title: 'Button',
  parameters: { notes: componentNotes },
};
