import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import Exemple from 'components/Exemple'
import 'sass/style.scss';




export const ExampleSimple = () => (
  <ThemePicker picked="blue-light">
    <Exemple/>
  </ThemePicker>
);





export default {
  title: 'Example',
  parameters: {
    notes: {
      TitreExample: 'This is something to know',
    }
  },
};
