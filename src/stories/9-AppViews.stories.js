import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';
import { action } from '@storybook/addon-actions';
import Input from 'components/Input'
import Form from 'components/Form'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import Landing from 'components/Landing'
import CustomerLanding from 'components/CustomerLanding'
import OrganiserLanding from 'components/OrganiserLanding'

import componentNotes from './doc/CustomerLanding.md';


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
  title: 'App Full Views',
  parameters: { notes: componentNotes },
};
