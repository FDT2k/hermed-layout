import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'


import Landing from 'views/Landing'

import CustomerLanding from 'views/Landing/Customer'

import OrganiserLanding from 'views/Landing/Organiser'

const action = alert;


export const  LandingCustomerCallBackTest =()=>
<div className="theme-landing">
<MobileVHAdapter>
      <CustomerLanding handleClick={(val)=>alert('clicked '+val)}/>
      </MobileVHAdapter>
    </div>

export const  LandingOrganiser =()=>
  <>
  <div className="theme-landing">
  <MobileVHAdapter>

      <OrganiserLanding handleSubmit={x=>action('submit')} handleClick={(val)=>action('cucu')}/>
      </MobileVHAdapter>
      
    </div>
  </>


export default {
  title: 'AppViews/Landing',
};
