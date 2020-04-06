import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'
import MobileVHAdapter from 'components/MobileVHAdapter'


import Landing from 'views/Landing'

import CustomerLanding from 'views/Landing/Customer'

import OrganiserLanding from 'views/Landing/Organiser'

const action = alert;


export const  LandingCustomerCallBackTest =()=>
  <ThemePicker picked="pink-light">
    <MobileVHAdapter>
      <CustomerLanding handleClick={(val)=>alert('clicked '+val)}/>
    </MobileVHAdapter>
  </ThemePicker>

export const  LandingOrganiser =()=>
  <ThemePicker picked="pink-light">
    <MobileVHAdapter>

      <OrganiserLanding handleSubmit={x=>action('submit')} handleClick={(val)=>action('cucu')}/>
    </MobileVHAdapter>

  </ThemePicker>


export default {
  title: 'AppViews/Landing',
};
