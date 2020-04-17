import React,{useState,useEffect} from 'react'
import { bem,compose,baseElement, withModifiers, wrapComponent,asideElement, divElement, withBaseClass, cEx } from 'utils'

const [__base_class,element,modifier] = bem('sidebar')

const Component = compose(
  withBaseClass(__base_class),
  withModifiers(x=>modifier(x),['closed'])
)(baseElement('aside'))

export default Component;