import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';

import Input from 'components/Input'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'


import CustomerLanding from 'components/CustomerLanding'

export const  Landing =()=>
    <div className="theme-landing">
      <CustomerLanding>
        <Input label="Votre date de naissance" name="birthday" placeholder="Votre date de naissance" autoComplete="off"/>
        <Button>JE SUIS PRÊT !</Button>
      </CustomerLanding>
    </div>

export const  Callback =()=>
    <ThemePicker>
      <CustomerLanding handleClick={()=>alert('clicked')}/>
    </ThemePicker>


export default {
  title: 'Landing',
  component: CustomerLanding,
};
