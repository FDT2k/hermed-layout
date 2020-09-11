import React,{useEffect,useState,useRef} from 'react';
import 'sass/projects/hermod/style.scss';
import {makeThemeSelect,Components,Annotate} from 'stories/storybook-utils'


import * as Icons from 'components/Icons'

export default Components("Icons")

export const Burger = () =>
  <div className={makeThemeSelect()}>
      <Icons.Hamburger xs/> 
      <Icons.Hamburger s/>
      <Icons.Hamburger m/>
      <Icons.Hamburger l/>
      <Icons.Hamburger xl/>
  </div>


export const ColoredBurger = () =>
  <div className={makeThemeSelect()}>
    <div style={{color:'red'}}>
      <Icons.Hamburger xs style={{color:'blue'}}/> 
      <Icons.Hamburger s/>
      <Icons.Hamburger m/>
      <Icons.Hamburger l/>
      <Icons.Hamburger xl/>
      </div>
  </div>

export const Gear = () =>
  <div className={makeThemeSelect()}>
      <Icons.Gear xs/>
      <Icons.Gear s/>
      <Icons.Gear m/>
      <Icons.Gear l/>
      <Icons.Gear xl/>
  </div>
