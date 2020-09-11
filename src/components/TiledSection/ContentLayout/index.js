import React from 'react'
import { compose } from '@geekagency/composite-js'
import { bem,applyModifiers, withModifiers,withBaseClass, wrapComponent, divElement, cEx, baseElement } from 'utils'
import LayoutFlex from 'layouts/Flex';
import {BEM as ParentBem} from '../index';


const {current,modifier} = ParentBem.make.element('content')

const modifiers= ['grid','product'];

const [defaultModifier, ...otherModifiers] = modifiers

const withEnhancer = compose(
    withBaseClass(current),
    applyModifiers({[defaultModifier]:true},otherModifiers),
    withModifiers(x => modifier(x), modifiers),
)

export default withEnhancer(LayoutFlex);