import React,{useState} from 'react'
import { cEx, compose, applyModifiers, withBaseClass, bem, divElement } from 'utils';
import LayoutFlex from 'layouts/Flex'


const [__base_class,element,modifier] = bem('background-overlay');


export default compose(
  withBaseClass(__base_class),
  applyModifiers({cover:true})
)(LayoutFlex)

