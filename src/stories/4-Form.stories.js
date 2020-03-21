import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';


import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'

import componentNotes from './doc/Form.md';


export const  Empty =()=>
    <div className="theme-chat"><Form> hell world </Form></div>

export const  Simple =()=>
    <div className="theme-landing">
      <Form>
        <Input label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off"/>
        <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off"/>
        <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off"/>
          <Button>Hello world</Button>
            <Button text>Hello world</Button>
          <Button outlined>Hello world</Button>
      </Form>
    </div>

  export const  Contained =()=>
      <div className="theme-landing">
        <div style={{width:'300px',maxWidth:'300px', margin:'0 auto'}}>
          <Form>
            <Input label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off"/>
            <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off"/>
            <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off"/>
              <Button>Hello world</Button>
                <Button text>Hello world</Button>
              <Button outlined>Hello world</Button>
          </Form>
        </div>
      </div>


export default {
  title: 'Form',
  parameters: { notes: componentNotes },
};
