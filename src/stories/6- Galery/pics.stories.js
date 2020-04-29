import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import LayoutFlex from 'layouts/Flex'
import Fullscreen from 'containers/Fullscreen'
import GridGallery from 'components/GridGallery'
import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'
import photos from './photos';
import { bem,compose,baseElement, applyModifiers,withModifiers, wrapComponent,asideElement, divElement, withBaseClass, cEx } from 'utils'

export default {
  title: 'Galery/Pictures',
  decorators: [withKnobs]
};


const [__base_class,element,modifier] = bem('galery')


const Galery = compose(
    withBaseClass(__base_class),
    applyModifiers({'contentStart':true,'alignStart':true, justEvenly:'true'}),
    applyModifiers({'wrap':true})

)(GridGallery)

const [__thumb_class,telement,tmodifier] = bem(element('thumb'))

const Thumb = compose(
    withBaseClass(__thumb_class),
    withModifiers(tmodifier,['grow1',''])
)(baseElement('img'))

export const SingleInput = () => {
  return (<div className={makeThemeSelect()}>
      <Fullscreen overflowY>
      <Galery items={photos}/>
      </Fullscreen>
  </div>)

}
