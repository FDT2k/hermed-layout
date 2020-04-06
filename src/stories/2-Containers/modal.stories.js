import React, { useEffect, useState, useRef } from 'react';
import Modal from 'containers/Modal'
import Fullscreen from 'containers/Fullscreen'
import Flex from 'layouts/Flex'
import 'sass/style.scss';


import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'

export default {
  title: 'Containers/Modal',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS: 'Here the order should be Header, footer,content',
      NotInOrder: 'Here the order should be reversed'
    }
  },
  decorators: [withKnobs]
};

export const FullScreen = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal cover style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{ textAlign: 'center' }}>this screen should cover all the visible area and I should be centered on the viewport</p>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}

export const FitContainingView = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{ textAlign: 'center' }}>this screen should be on top and fitting this text</p>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}

export const FitContainingViewCentered = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit centered style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{ textAlign: 'center' }}>this screen should centered in viewport and fitting this text</p>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}

export const FitContainingViewCenteredWithBigHeight = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit centered style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered layout-flex--list">
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>This should scroll if</p></div>
            <div><p style={{ textAlign: 'center' }}>bigger</p></div>
            <div><p style={{ textAlign: 'center' }}>than viewport</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}
