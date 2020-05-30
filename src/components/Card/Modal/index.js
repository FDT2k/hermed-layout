import React from 'react';


import BackgroundOverlay from 'components/BackgroundOverlay'

import Card from 'components/Card';

import Modal from 'containers/Modal'


export default ({children, ...rest}) => {

    return (
        <Modal cover >
            <BackgroundOverlay centered>
                <Card {...rest}>
                    {children}
                </Card>
            </BackgroundOverlay>
        </Modal>
    )
}