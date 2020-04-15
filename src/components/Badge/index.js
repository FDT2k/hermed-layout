import React, { useState } from 'react'
import { divElement, compose, applyModifiers, withModifiers,withTransformedProps, withBaseClass, cEx,bem } from 'utils';

import LayoutFlex from 'layouts/Flex'
import {CLASSES,SIZE_PROPS,STATE_PROPS} from 'definition';

const [BASE_CLASS, element, modifier] = bem(CLASSES.BADGE)


const withBadgeModifiers = compose(
    withModifiers(x => modifier(x), STATE_PROPS),
    withModifiers(x => modifier(x), SIZE_PROPS)
)

const enhance = compose(
    withBaseClass(BASE_CLASS),
    // transform status props to modifier
    withTransformedProps(x => modifier(x), ['status']),
    withBadgeModifiers,
    applyModifiers({'centered':true})
)

export default enhance(LayoutFlex)