import React, { useEffect, useState, useRef } from 'react';
import Fullscreen from 'containers/Fullscreen'
import Stack from 'containers/Stack'
import 'sass/style.scss';



export const Simple = () => (
  <div className="theme-blue-light">
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

  </div>
);


export default {
  title: 'Containers/Stack',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS: 'Here the order should be Header, footer,content',
      NotInOrder: 'Here the order should be reversed'
    }
  },
};
