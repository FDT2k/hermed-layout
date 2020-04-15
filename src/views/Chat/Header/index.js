import React from 'react'
import {cEx} from '@geekagency/gen-classes'

import LayoutFlex from 'layouts/Flex'
import Header from 'components/Header';



import BackButton from 'components/Header/BackButton';
import ChatHeaderStatus from 'views/Chat/Header/UserStatus';
import ChatHeaderToolbar from 'views/Chat/Header/Toolbar';


export default props => {

  const {className, title,subtitle, badge , showToolbar} = props;
  const {handleBack, handleCall, handleVideoCall} = props;

  const callHandlers = {handleCall,handleVideoCall}

  const classes = cEx ([
    className,

  ])


  return (
    <Header>
      <LayoutFlex>
        <BackButton handleBack={handleBack}/>
        <ChatHeaderStatus badge={badge} title={title} subtitle={subtitle}/>
      </LayoutFlex>
      {showToolbar && <ChatHeaderToolbar {...callHandlers}/>}
    </Header>
  )
}


/*
import LayoutFlex from 'layouts/Flex'
import {compose,applyModifiers,withBaseClass} from 'utils'; 

const Headline = withBaseClass('headline')
const Layout = applyModifiers({'justBetween':true})
const enhance = compose(Layout,Headline)

export default enhance(LayoutFlex)*/