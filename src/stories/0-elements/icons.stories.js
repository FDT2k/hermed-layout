import React, { useEffect, useState, useRef } from 'react';
import 'sass/projects/hermod/style.scss';


import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'

import * as Icons from 'components/Icons'

export default {
  title: "Base Elements/icons",
  decorators: [withKnobs]
};

export const Burger = () =>
  <div className={makeThemeSelect()}>
      <Icons.Hamburger xs/>
      <Icons.Hamburger s/>
      <Icons.Hamburger m/>
      <Icons.Hamburger l/>
      <Icons.Hamburger xl/>
  </div>

export const Gear = () =>
  <div className={makeThemeSelect()}>
      <Icons.Gear xs/>
      <Icons.Gear s/>
      <Icons.Gear m/>
      <Icons.Gear l/>
      <Icons.Gear xl/>
  </div>
