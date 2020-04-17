import React from 'react';
import { bem,compose, withModifiers, wrapComponent, divElement, withBaseClass, cEx } from 'utils'

const [__base_class,element,modifier] = bem ('example-component')

const Component = compose(
    withBaseClass(__base_class),
    withModifiers(x => modifier(x), ['closed'])
)(divElement)

export default Component;