import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'

import componentNotes from './doc/Form.md';

export const  Simple =()=>
    <div className="theme-landing">
      <Form>
        <Input label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off"/>
        <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off"/>
        <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off"/>
        <Button>Hello world</Button>
        <p className="label"> Vous n'avez pas de compte ?</p>
        <Button text>Hello world</Button>
        <Button outlined>Hello world</Button>
      </Form>
    </div>

  export const  Contained =()=>
    <ThemePicker>
        <div style={{width:'300px',maxWidth:'300px', margin:'0 auto'}}>
          <Form>
            <Input label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off"/>
            <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off"/>
            <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off"/>
            <Button>Hello world</Button>
            <div className="centered">
              <p className="label"> Vous n'avez pas de compte ?</p>
              <Button text>Hello world</Button>
            </div>

          </Form>
        </div>
      </ThemePicker>


export default {
  title: 'Form',
  parameters: { notes: componentNotes },
};
