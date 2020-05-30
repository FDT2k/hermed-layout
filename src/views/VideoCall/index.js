import React, { useState, useEffect, useRef } from 'react'
import { filterPropStartingWith, forwardProps, bem, cEx } from 'utils'

import {compose,applyModifiers,withBaseClass} from 'utils'; 

import LayoutFlex from 'layouts/Flex'

import Video from 'components/Video'
import Draggable from 'react-draggable'
import LayoutGrid from 'layouts/Grid'
import { MdCall, MdCallEnd } from 'react-icons/md'
import Button from 'components/Button'
import DefaultToolbar from 'views/VideoCall/DefaultVideoToolbar'


const VideoCall =  ({ className, Toolbar, handleAnswer, handleDiscard, incoming, ...rest }) => {

    const [mainVideoProps, notSuitableForVp] = filterPropStartingWith('video', rest);
    const [feedbackVideoProps, notSuitableForFb] = filterPropStartingWith('feedback', notSuitableForVp);
    const [toolbarProps, notSuitableForToolbar] = filterPropStartingWith('toolbar', notSuitableForFb);

    return (
        <div className={className}  {...notSuitableForToolbar}>

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


export const [__base_class, element,modifier] = bem('video-call');

const enhance = withBaseClass(__base_class)

export default enhance(VideoCall)


