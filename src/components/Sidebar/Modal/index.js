import React from 'react';
import { bem, compose, withModifiers, wrapComponent, divElement, withBaseClass, cEx } from 'utils'


import BackgroundOverlay from 'components/BackgroundOverlay'

import Sidebar from 'components/Sidebar';

import Modal from 'containers/Modal'

const [__base_class, element, modifier] = bem('sidebar__modal')

const ClosableModal = compose(
    withBaseClass(__base_class),
    withModifiers(x => modifier(x), ['closed'])
)(Modal)

export default ({ children, handleClick, closed, ...rest }) => {

    return (
        <ClosableModal relative cover closed={closed}>
            <BackgroundOverlay onClick={handleClick}>
                <Sidebar onClick={e => e.stopPropagation()} closed={closed} {...rest}>
                    {children}
                </Sidebar>
            </BackgroundOverlay>
        </ClosableModal>
    )
}