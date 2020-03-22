import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';

import Input from 'components/Input'
import Form from 'components/Form'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import Landing from 'components/Landing'



export const  LandingOriganiser =()=>
    <div className="theme-landing">
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
    </div>

export const  LandingCustomer =()=>
    <div className="theme-landing">
      <Landing customer>
        <p className="text--center">
          Le Dr. XXX vous invite à rejoindre sa salle d'attente pour une consultation à distance. Lorsque vous êtes prêts, cliquez sur le bouton ci-dessous pour la rejoindre.
        </p>
        <Input label="Votre date de naissance" name="birthday" placeholder="Votre date de naissance" autoComplete="off"/>
        <Button>JE SUIS PRÊT !</Button>
      </Landing>
    </div>

export const  Callback =()=>
    <ThemePicker>
      <Landing handleClick={()=>alert('clicked')}/>
    </ThemePicker>


export default {
  title: 'Landing',
  component: Landing,
};
