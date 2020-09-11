import React from 'react';
import { bem, makeBem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'
import LayoutFlex from 'layouts/Flex'


export const BEM =   makeBem ('tiled-section')

const {current} = BEM;

const TiledSection = compose(
   
    withBaseClass(current),

    applyModifiers({column:true, justCenter: true, alignCenter: true, cover: true }),
    withModifiers(x=>BEM.modifier(x),['debug'])
)(LayoutFlex)


export default TiledSection;