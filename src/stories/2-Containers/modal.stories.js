import React, { useEffect, useState, useRef } from 'react';
import Modal from 'containers/Modal'
import Fullscreen from 'containers/Fullscreen'
import Flex from 'layouts/Flex'
import 'sass/projects/hermod/style.scss';



import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'

export default {
  title: 'Containers/Modal/Absolute',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS: 'Here the order should be Header, footer,content',
      NotInOrder: 'Here the order should be reversed'
    }
  },
  decorators: [withKnobs]
};

export const S1FullScreen = () => {
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

export const S1DefaultFit = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{ width:'100px', textAlign: 'center' }}>Modal should fit children by default</p>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}


export const S2AbsoluteFit = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{ width:'100px', textAlign: 'center' }}>this screen should be on top and fitting this text</p>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}


export const S2RelativeFit = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <p> some disturbing stuff</p>
      <div style={{
        width:'200px;',
        height:'200px',
        backgroundColor:'blue'
      }}>
        <Modal relative fit style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{ width:'100px', textAlign: 'center' }}>this screen should be on top and fitting this text</p>
          </Flex>
        </Modal>
      </div>
    </div>

  );
}


export const S3AbsoluteFitCentered = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit centered style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{  width:'100px',textAlign: 'center' }}>this screen should centered in viewport and fitting this text</p>
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}


export const S3RelativeFitCentered = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <p> some disturbing stuff</p>
      <div style={{
        width:'200px;',
        height:'200px',
        backgroundColor:'blue'
      }}>
        <Modal fit  relative centered style={{ backgroundColor: 'red' }}>
          <Flex className="layout-flex--cover layout-flex--centered">
            <p style={{  width:'100px',textAlign: 'center' }}>this screen should centered in viewport and fitting this text</p>
          </Flex>
        </Modal>
      </div>
    </div>

  );
}

const LotOfStuff = _=> (
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
)

export const S4AbsoluteFitCenteredWithBigHeight = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit centered style={{ backgroundColor: 'red' }}>
          <LotOfStuff></LotOfStuff>
        </Modal>
      </Fullscreen>
    </div>

  );
}

export const S4RelativeitCenteredWithBigHeight = () => {
  const fullscreen = options('size', {
    fullscreen: 'fullscreen',
    centered: 'centered',

  }, 'fullscreen', { display: 'radio' })
  return (
    <div>
    <p> some disturbing stuff</p>  <p> some disturbing stuff</p>
    <div className={makeThemeSelect()}>
       <div style={{
        width:'200px;',
        height:'200px',
        backgroundColor:'blue'
      }}>
        <Modal relative fit centered style={{ backgroundColor: 'red' }}>
          <LotOfStuff></LotOfStuff>
        </Modal>
      </div>
    </div>
    </div>
  );
}

export const Bottom = () => {
  
  return (

    <div className={makeThemeSelect()}>
      <Fullscreen>
        <Modal fit bottom hcenter  style={{ backgroundColor: 'red' }}>
          <Flex>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
            <div><p style={{ textAlign: 'center' }}>...---...</p></div>
    
          </Flex>
        </Modal>
      </Fullscreen>
    </div>

  );
}
