import React, { useEffect, useState, useRef } from 'react';
import 'sass/projects/gka/style.scss';
import 'sass/projects/hermod/style.scss';

import LayoutFlex from 'layouts/Flex'
import Fullscreen from 'containers/Fullscreen'
import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'
import { bem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'
import { camelToSnakeCase, trace } from '@geekagency/composite-js'
import  Slider from 'components/Slider';

export default {
    title: 'Cookit/Website',
    decorators: [withKnobs]
};


export const SliderSample = props => {
    return (
        <div className={makeThemeSelect()}>
            <Slider />
        </div>
    )
}