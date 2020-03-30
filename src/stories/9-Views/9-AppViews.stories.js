import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import ThemePicker from 'components/ThemePicker'


import Landing from 'views/Landing'

import CustomerLanding from 'views/Landing/Customer'

import OrganiserLanding from 'views/Landing/Organiser'

const action = alert;


export const  LandingCustomerCallBackTest =()=>
    <ThemePicker>
      <CustomerLanding handleClick={(val)=>alert('clicked '+val)}/>
    </ThemePicker>

export const  LandingOrganiser =()=>
  <>
    <ThemePicker>
      <OrganiserLanding handleSubmit={x=>action('submit')} handleClick={(val)=>action('cucu')}/>
    </ThemePicker>
  </>


export default {
  title: 'AppViews/Landing',
};
