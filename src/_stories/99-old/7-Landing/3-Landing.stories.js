import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';

import Input from 'components/Input'
import Form from 'components/Form'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import Landing from 'views/Landing'
import CustomerLanding from 'views/Landing/Customer'



export const  LandingOrganiser =()=>
    <ThemePicker picked="pink-light">
      <Landing>
        <Form className="flex-column align-center">
          <Input label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off"/>
          <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off"/>
          <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off"/>
          <Button>Hello world</Button>
          <p className="label"> Vous n'avez pas de compte ?</p>
          <Button text>Hello world</Button>
        </Form>
      </Landing>
    </ThemePicker>

export const  LandingContainer =()=>
    <ThemePicker picked="pink-light">
      <Landing customer>
        <p className="text--center">

          Some Content
        </p>

        <Button>JE SUIS PRÊT !</Button>
      </Landing>
    </ThemePicker>

export const  LandingCustomerCallBackTest =()=>
    <ThemePicker>
      <CustomerLanding handleClick={(val)=>alert('clicked '+val)}/>
    </ThemePicker>


export default {
  title: 'Landing',

};
