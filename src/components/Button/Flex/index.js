import React from 'react'

import { divElement, compose, applyModifiers, withModifiers, withTransformedProps, withBaseClass, cEx, bem } from 'utils';

import Button from 'components/Button'

const [BASE_CLASS, element, modifier] = bem('flexbutton')

const withFlexModifiers = compose(
    withModifiers(x => modifier(x), ['row','spread','row-reverse'])
)


const enhance = compose(
    withBaseClass(BASE_CLASS),
    withFlexModifiers
)

export default enhance(Button)