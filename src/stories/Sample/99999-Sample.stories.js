import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'
import Example from 'components/Exemple'
export default {
  title: "Example",
  decorators: [withKnobs]
};

export const HTag = () =>
  <div className={makeThemeSelect()}>
   
    Example story
  </div>
