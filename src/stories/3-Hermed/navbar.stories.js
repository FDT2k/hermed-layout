import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';
import { FaMicrophone, FaMicrophoneSlash, FaVideoSlash, FaVideo } from 'react-icons/fa'
import { MdChat } from 'react-icons/md'


import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'

import FullScreen from 'containers/Fullscreen'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'
import { TiWarning } from 'react-icons/ti'

import Card from 'components/Card'
import CardContainer from 'components/Card/Container'

export default {
  title: "Hermed/General/Navbar",
  decorators: [withKnobs]
};


export const BaseScheme = () => (
  <div className={makeThemeSelect()}>

    <LayoutFlex justBetween alignCenter className="scheme-navbar" >
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
    </LayoutFlex>
  </div>
);


export const BaseSchemeAndLayout = () => (
  <div className={makeThemeSelect()}>

    <LayoutFlex justBetween alignCenter className="scheme-navbar layout-navbar" >
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
      <h2>coucou</h2>
    </LayoutFlex>
  </div>
);


export const BaseSchemeAndToolbarLayout = () => (
  <div className={makeThemeSelect()}>
    <LayoutFlex justBetween alignCenter className="scheme-navbar layout-navbar layout-navbar--toolbar" >
      <h2>coucou</h2>

      <Button navbar>crotte</Button>
      <Button fit navbar>crotte</Button>
      <Button fit navbar className="icon--s"><MdChat /></Button>
      <Button fit navbar className="icon--s"><MdChat /><h2>title</h2></Button>
    </LayoutFlex>
    <br />
    <LayoutFlex justBetween alignCenter className="scheme-navbar layout-navbar layout-navbar--toolbar" >
      <Button fit navbar className="icon--s"><MdChat /></Button>
      <h2>coucou</h2>

      <Button navbar>crotte</Button>
      <Button fit navbar>crotte</Button>
      <Button fit navbar className="icon--s"><MdChat /><h2>title</h2></Button>
    </LayoutFlex>
  </div>
);



export const HeadlineWithSchemeAndToolbarLayout = () => (
  <div className={makeThemeSelect()}>

    <LayoutFlex justBetween alignCenter className="scheme-navbar layout-navbar layout-navbar--header" >
      <LayoutFlex>
        <Button fit navbar className="icon--s"><MdChat /></Button>
        <h2>coucou</h2>
      </LayoutFlex>
      <LayoutFlex>
        <Button navbar>crotte</Button>
        <Button fit navbar>crotte</Button>
        <Button fit navbar className="icon--s"><MdChat /></Button>
        <Button fit navbar className="icon--s"><MdChat /></Button>
      </LayoutFlex>
    </LayoutFlex>
  </div>
);


export const FooterWithSchemeAndToolbarLayout = () => (
  <div className={makeThemeSelect()}>

    <LayoutFlex justBetween alignCenter className="scheme-navbar layout-navbar layout-navbar--toolbar" >
     
        <Button fit navbar className="icon--s"><MdChat /><h2>chat</h2></Button>
        <Button fit navbar className="icon--s"><MdChat /><h2>chat</h2></Button>
        <Button fit navbar className="icon--s"><MdChat /><h2>chat</h2></Button>
        <Button fit navbar className="icon--s"><MdChat /><h2>chat</h2></Button>
        <Button fit navbar className="icon--s"><MdChat /><h2>chat</h2></Button>
    </LayoutFlex>
  </div>
);
