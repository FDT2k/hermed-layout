import React from 'react';
import { action,notes } from '@storybook/addon-actions';
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import 'sass/style.scss';
import componentNotes from './doc/Button.md';




export const Text = () => (
    <ThemePicker>
    <Button outlined>Hello Button</Button>
    <Button text>Hello Button</Button>
    <Button >Hello Button</Button>
    </ThemePicker>
  );

export const Emoji = () => (
  <div className="theme-chat">

  <Button >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
  </div>
);


export default {
  title: 'Button',
  parameters: { notes: componentNotes },
};
