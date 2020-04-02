import React from 'react'
import {cEx} from '@geekagency/gen-classes'


import Header from 'components/Header';
import BackButton from 'components/Header/BackButton';
import Content    from 'components/Header/Content';
import ChatHeaderStatus from 'components/Header/Chat/UserStatus';
import ChatHeaderToolbar from 'components/Header/Chat/Toolbar';
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
      <Content>
        <BackButton handleBack={handleBack}/>
        <ChatHeaderStatus badge={badge} title={title} subtitle={subtitle}/>
      </Content>
      {showToolbar && <ChatHeaderToolbar {...callHandlers}/>}
    </Header>
  )
}
