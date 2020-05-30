import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import LayoutFlex from 'layouts/Flex'
import Fullscreen from 'containers/Fullscreen'
import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'
import { bem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'
import { camelToSnakeCase, trace } from '@geekagency/composite-js'

export default {
    title: 'PeerTransfer/Upload',
    decorators: [withKnobs]
};

const [__base_class, element, modifier] = bem('variable-background')

const Background = compose(
    withBaseClass(__base_class),
    withVariables(
        compose(x => `--${x}`, camelToSnakeCase),
        compose(x => `url(${x})`),
        ['backgroundImage']
    ),
    withModifiers(modifier, ['cover'])
)(Fullscreen);


const [_squared_class, squaredElement, squaredModifier] = bem('squared-drop-card')

const SquaredDrop = compose(
    withBaseClass(_squared_class),

    withModifiers(
        compose(squaredModifier, camelToSnakeCase),
        [
            'topRight', 'topLeft',
            'top', 'bottom', 'left', 'right',
            'opposite', 'oppositeReverse',
            'bottomRight', 'bottomLeft'
        ])
)(LayoutFlex)


export const Main = props => {
    let bg = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
    return (
        <div className={makeThemeSelect()}>
            <Background overflowY cover backgroundImage={bg} >
                <LayoutFlex wrap justCenter>

                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover topRight> topRight</SquaredDrop>
                    </div>

                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover topLeft> topLeft</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover top> top</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover bottom> bottom</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover left> left</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover right> right</SquaredDrop>
                    </div>

                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover opposite> opposite</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover oppositeReverse> oppositeReverse</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover bottomRight> bottom right</SquaredDrop>
                    </div>
                    <div style={{
                        width: '250px',
                        height: '200px'
                    }}>
                        <SquaredDrop cover bottomLeft> bottom left</SquaredDrop>
                    </div>
                </LayoutFlex>
            </Background>
        </div>
    )
}