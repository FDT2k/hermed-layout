import React, { useState, useEffect, useRef } from 'react'
import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'


import LayoutFlex from 'layouts/Flex'

import { FaMicrophone, FaMicrophoneSlash, FaVideoSlash, FaVideo } from 'react-icons/fa'
import { MdChat } from 'react-icons/md'
import Button from 'components/Button'


const [__base_class,element, modifier] = bem('video-call__toolbar');


export default (props) => {
    console.log (props)
    const { className, microEnabled, camEnabled, handleChat, handleMicro, handleCamera, handleSwitch, ...rest } = props;
    const [_microEnabled, setMicroEnabled] = useState(microEnabled === true || false);
    const [_cameraEnabled, setCameraEnabled] = useState(camEnabled === true || false);
    //const [preferredCam,setPreferredCam]     = useState(camDevice === true || false);


    const _toggleMicro = () => {
        const newState = !_microEnabled
        setMicroEnabled(newState)
        handleMicro && handleMicro(newState)
    }
    const _toggleCamera = () => {
        const newState = !_cameraEnabled
        setCameraEnabled(newState)
        handleCamera && handleCamera(newState)
    }

    const classes = cEx([
        __base_class,
        className
    ])

    return (

        <LayoutFlex justBetween className={classes} {...rest}>
            <Button fit toolbar onClick={handleChat}> <MdChat /><h2>Chat</h2></Button>
            <Button fit toolbar onClick={_toggleMicro}>
                {_microEnabled && <FaMicrophone />}
                {!_microEnabled && <FaMicrophoneSlash />}
                <h2>Micro</h2>
            </Button>
            <Button fit toolbar onClick={_toggleCamera}>
                {_cameraEnabled && <FaVideo />}
                {!_cameraEnabled && <FaVideoSlash />}

                <h2>Camera</h2>
            </Button>
            <Button fit toolbar onClick={handleSwitch}><MdChat /><h2>Switch</h2></Button>
        </LayoutFlex>

    )
}
