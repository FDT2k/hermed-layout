import React from 'react'
import { compose } from '@geekagency/composite-js'
import { bem,applyModifiers, withModifiers,withBaseClass, wrapComponent, divElement, cEx, baseElement } from 'utils'

import {BEM as ParentBem} from '../index';

export const Title = props => {
    const { className,title } = props
    return (
        <header className={className}>
            <h1>{title}</h1>
        </header>
    )
}

const {current,modifier} = ParentBem.make.element('title')

const titleModifiers= ['main'];

const withTitleModifiers = compose(
    withBaseClass(current),
    applyModifiers({['page']:true},titleModifiers),
    withModifiers(x => modifier(x), ['page','animate',...titleModifiers]),
)

export default withTitleModifiers(Title);