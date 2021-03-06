import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import Badge from 'components/Badge'
import 'sass/projects/hermod/style.scss';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


import { makeThemeSelect } from 'stories/theme-knobs'

import * as Icons from 'components/Icons'

export default {
  title: "Base Elements/badges",
  decorators: [withKnobs]
};

export const ExampleSimple = () => (
  <div className={makeThemeSelect()}>
    <Badge/>
    <Badge red/>
    <Badge orange/>
    <Badge green/>
    <Badge m/>
    <Badge red m/>
    <Badge orange m/>
    <Badge green m/>
    <Badge l/>
    <Badge red l/>
    <Badge orange l/>
    <Badge green l/>
    <Badge xl/>
    <Badge red xl/>
    <Badge orange xl/>
    <Badge green xl/>
  </div>
);




export const ExampleWithContent= () => (
  <div className={makeThemeSelect()}>

    <Badge>1</Badge>
    <Badge red>2</Badge>
    <Badge orange>3</Badge>
    <Badge green>4</Badge>
    <Badge m>5</Badge>
    <Badge red m>6</Badge>
    <Badge orange m>7</Badge>
    <Badge green m>8</Badge>
    <Badge green l>9</Badge>
    <Badge green xl>10</Badge>
    <Badge status="green" xl>65</Badge>
    </div>

);

