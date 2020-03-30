import React from 'react'
import {cEx} from '@geekagency/gen-classes'


import Header from 'components/Header';
import HeaderBackButton from 'components/HeaderBackButton';
import HeaderToolbar    from 'components/HeaderToolbar';
import HeaderTitle    from 'components/HeaderTitle';
import ChatHeaderStatus from 'components/ChatHeaderStatus';
import ChatHeaderToolbar from 'components/ChatHeaderToolbar';
export default props => {

  const {className, title,subtitle, badge , showToolbar} = props;
  const {handleBack, handleCall, handleVideoCall} = props;

  const callHandlers = {handleCall,handleVideoCall}
/*
    const {doctor,patient} = props
    const isDoctor= doctor===true || (!doctor && !patient);
*/
  const classes = cEx ([
    "headline",
    "flex-row",
    "just-between",
    "align-center",
    className,
  /*  {
      "headline--patient":  _=> isDoctor !== true,
      "headline--doctor":   _=> isDoctor === true,
    }*/
  ])


  return (
    <Header>
      <HeaderTitle>
        <HeaderBackButton handleBack={handleBack}/>
        <ChatHeaderStatus badge={badge} title={title} subtitle={subtitle}/>
      </HeaderTitle>
      {showToolbar && <ChatHeaderToolbar {...callHandlers}/>}
    </Header>
  )
}
