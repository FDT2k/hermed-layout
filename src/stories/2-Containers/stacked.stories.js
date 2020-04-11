import React, { useEffect, useState, useRef } from 'react';
import Fullscreen from 'containers/Fullscreen'
import Stack from 'containers/Stack'
import 'sass/style.scss';
import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";

import { makeThemeSelect } from 'stories/theme-knobs'

export const Single = () => (
  <div className="theme-blue-light">
    <Fullscreen>
      <Stack>
        <Fullscreen>
          asdghasdg
      </Fullscreen>

      </Stack>
    </Fullscreen>
  </div>
);

export const Simple = () => (
  <div className="theme-blue-light">
    <Fullscreen>
      <Stack>
        <Fullscreen>
          asdghasdg
      </Fullscreen>
        <Fullscreen >
          The screen should cover all the visible area
      </Fullscreen>
        <Fullscreen >
          The screen should cover all the visible area
      </Fullscreen>
      </Stack>
    </Fullscreen>
  </div>
);


export const withConditionnal = () => {
  const valuesCheck = {
    'display': 'display',
    
  };
  const optionsCheck = options('Status', valuesCheck, [], { display: 'check' },'Main');
  return (<div className="theme-blue-light">
    <Fullscreen>
      <Stack>
        <Fullscreen>
          asdghasdg
      </Fullscreen>
     {optionsCheck.indexOf('display') > -1 &&
      <Fullscreen >
          I'm conditional, lol
      </Fullscreen>}
        <Fullscreen >
          The screen should cover all the visible area
      </Fullscreen>
      </Stack>
    </Fullscreen>
  </div>
  );
}

export default {
  title: 'Containers/Stack',
  decorators: [withKnobs],
  parameters: {
    notes: {
      InheritedViewReorderViaCSS: 'Here the order should be Header, footer,content',
      NotInOrder: 'Here the order should be reversed'
    }
  },
};
