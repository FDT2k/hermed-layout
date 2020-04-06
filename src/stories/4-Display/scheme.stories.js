import React, { useEffect, useState, useRef } from 'react';
import Modal from 'containers/Modal'
import Fullscreen from 'containers/Fullscreen'
import Flex from 'layouts/Flex'
import 'sass/style.scss';


import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'

export default {
  title: 'Schemes/BaseScheme',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS: 'Here the order should be Header, footer,content',
      NotInOrder: 'Here the order should be reversed'
    }
  },
  decorators: [withKnobs]
};


export const Normal = ()=>{

  return (
    <div className={makeThemeSelect()}>
      <div className="scheme-header">
        <Flex justBetween>
          <h2>Hello</h2>
          <span>Lalala</span>
        </Flex>
      </div>
    </div>

  )
}


export const Reverse = ()=>{

  return (
    <div className={makeThemeSelect()}>
      <div className="scheme-header scheme-header__reverse">
        <Flex justBetween>
          <h2>Hello</h2>
          <span>Lalala</span>
          <p>lorem ipsum youpi lala</p>
        </Flex>
      </div>
    </div>

  )
}