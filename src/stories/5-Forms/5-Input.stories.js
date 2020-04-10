import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';

import Input from 'components/Input'
import InputCheckbox from 'components/InputCheckbox'
import InputChatMessage from 'components/InputChatMessage'
import Select from 'components/Input/Select'
import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'


export default {
  title: 'Form/Input',
  decorators: [withKnobs]
};

export const SingleInput = () =>
  <div className={makeThemeSelect()}>
    <Input  />
    <Input error />
    <Input label="With Label" />
    <Input label="With Label and placeholder" placeholder="hey I'm placeholder" />

    <Input mask="99/99/9999" placeholder="Enter birthdate" />

    <Input mask="99/99/9999" placeholder="Enter birthdate" label="EnterBirthdate"/>
  </div>



export const SingleSelect = () =>
  <div className={makeThemeSelect()}>
    <Select >
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
    <Select label="Pick something">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
    <Select label="With some disabled options">
      <option>Option 1</option>
      <option disabled>Option 2</option>
      <option>Option 3</option>
    </Select>
  </div>

export const SingleCheckbox = () =>
  <div className={makeThemeSelect()}>
    <InputCheckbox onChange={v=> alert('changed ')} label="SSL (should be unchecked)"  />
    <InputCheckbox onChange={v=> alert('changed ')} label="SSL(should be checked)" checked />
    <InputCheckbox onChange={v=> alert('changed ')} label="SSL (should be checked)" checked={true} />
  </div>

