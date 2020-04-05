import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import Badge from 'components/Badge'
import 'sass/style.scss';




export const ExampleSimple = () => (
  <ThemePicker picked="blue-light">
    <Badge/>
    <Badge red/>
    <Badge orange/>
    <Badge green/>
    <Badge medium/>
    <Badge red medium/>
    <Badge orange medium/>
    <Badge green medium/>
  </ThemePicker>
);




export const ExampleWithContent= () => (
  <ThemePicker picked="blue-light">
    <Badge>1</Badge>
    <Badge red>2</Badge>
    <Badge orange>3</Badge>
    <Badge green>4</Badge>
    <Badge medium>5</Badge>
    <Badge red medium>6</Badge>
    <Badge orange medium>7</Badge>
    <Badge green medium>8</Badge>
  </ThemePicker>
);


export default {
  title: 'Badge',

};
