import React, { useState, useEffect, useRef } from 'react'
import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'


import LayoutFlex from 'layouts/Flex'

import Video from 'components/Video'
import Draggable from 'react-draggable'
import LayoutGrid from 'layouts/Grid'
import { MdCall, MdCallEnd } from 'react-icons/md'
import { FaMicrophone } from 'react-icons/fa'
import { MdChat, MdVideocam, MdVideocamOff } from 'react-icons/md'
import Button from 'components/Button'
import DefaultToolbar from 'views/VideoCall/DefaultVideoToolbar'


export const [__base_class, element,modifier] = bem('video-call');



export default ({ className, Toolbar, handleAnswer, handleDiscard, incoming, ...rest }) => {

    const classes = cEx([
        __base_class,
        className
    ])

    const [mainVideoProps, notSuitableForVp] = filterPropStartingWith('video', rest);
    const [feedbackVideoProps, notSuitableForFb] = filterPropStartingWith('feedback', notSuitableForVp);
    const [toolbarProps, notSuitableForToolbar] = filterPropStartingWith('toolbar', notSuitableForFb);

    return (
        <div className={classes}  {...notSuitableForToolbar}>

            <LayoutGrid className="layout-video-call">

                <LayoutFlex className="position-relative">
                    <Video
                        autoPlay
                        loop
                        {...forwardProps('video', mainVideoProps)} />

                    <LayoutFlex
                        justEvenly
                        className={`${__base_class}__controls`}
                        >

                        {incoming && <Button round success onClick={handleAnswer} ><MdCall /></Button>}

                        <Button
                            round
                            failure
                            onClick={handleDiscard}>
                            <MdCallEnd />
                        </Button>

                    </LayoutFlex>

                </LayoutFlex>

                {!Toolbar && <DefaultToolbar {...forwardProps('toolbar', toolbarProps)} />}

            </LayoutGrid>

            <Draggable bounds={'.' + __base_class}>
                <Video
                    preview
                    autoPlay
                    loop
                    muted
                    {...forwardProps('feedback', feedbackVideoProps)} />
            </Draggable>

        </div>
    )
}
