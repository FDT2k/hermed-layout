import React from 'react'
import {cEx} from '@geekagency/gen-classes'


import HeaderBackButton from '../HeaderBackButton';
import HeaderToolbar    from '../HeaderToolbar';
import HeaderTitle    from '../HeaderTitle';
import ChatHeaderStatus from '../ChatHeaderStatus';
export default props => {

  const {className, title,subtitle, badge ,handleBack,Toolbar} = props
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
    <header className={classes}>
      <HeaderTitle>
        <HeaderBackButton handleBack={handleBack}/>
        <ChatHeaderStatus badge={badge} title={title} subtitle={subtitle}/>
      </HeaderTitle>
      <HeaderToolbar>
         {Toolbar && <Toolbar/>}
      </HeaderToolbar>
    </header>
  )
}
