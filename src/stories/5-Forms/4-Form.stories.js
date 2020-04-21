import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import ThemePicker from 'components/ThemePicker'
import LayoutFlex from 'layouts/Flex'


export default {
  title: 'Form/Layout',

  decorators: [withKnobs]
};
export const Simple = () =>
  <ThemePicker>
    <Form>
      <Input label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off" />
      <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off" />
      <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off" />
      <Button>Hello world</Button>
      <p className="label"> Vous n'avez pas de compte ?</p>
      <Button text>Hello world</Button>
      <Button outlined>Hello world</Button>
    </Form>
  </ThemePicker>

export const Contained = () =>
  <div className={makeThemeSelect()}>
    <div style={{ width: '500px', maxWidth: '500px', margin: '0 auto' }}>
      <Form>
        <Input error="oups, this is a very long error, so we can see what happens if it's too long. blabla bli blou blalbi" label="Votre nom " name="name" placeholder="Votre nom complet" autoComplete="off" />
        <Input label="Votre adresse email" name="email" placeholder="votre@adresse.mail" autoComplete="off" />
        <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off" />
        {/*  flexRowReverse
          flexJustEnd
        flexAlignCenter*/}
        <Input
          error="Vous devez accepter"
          checkbox="inline-reverse"
          type="checkbox"
          label="Enregistrer mes informations"
          name="name"
          placeholder="mot de passe"
          autoComplete="off"/>
          <Input
          error="Vous devez accepter"
          type="checkbox"
          label="Enregistrer mes informations"
          name="name"
          placeholder="mot de passe"
          autoComplete="off"/>
           <Input
          error="Vous devez accepter"
          checkbox="inline"
          type="checkbox"
          label="Enregistrer mes informations"
          name="name"
          placeholder="mot de passe"
          autoComplete="off"/>
          <Input
          error="Vous devez accepter"
          type="checkbox"
          label="Enregistrer mes informations"
          name="name"
          placeholder="mot de passe"
          autoComplete="off"/>
        <LayoutFlex>
          <Input label="Votre mot de passe" name="name" placeholder="mot de passe" autoComplete="off" />
          <Input type="checkbox" label="Enregistrer mes informations" name="name" placeholder="mot de passe" autoComplete="off" />
        </LayoutFlex>
        <Button>Hello world</Button>
        <div className="centered">
          <p className="label"> Vous n'avez pas de compte ?</p>
          <Button text>Hello world</Button>
        </div>

      </Form>
    </div>
    </div>

