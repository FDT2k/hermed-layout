import { addParameters } from '@storybook/react';


import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      'custom-1':{
        name: 'Responsive',
        styles: {
          width: '400px',
          height: '400px',
        },
        type: 'desktop',
      }

    }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});
