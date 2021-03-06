import React, { useEffect, useRef } from 'react'
import {applyModifiers, baseElement, withBem, withModifiers, compose, makeBem, filterPropStartingWith, forwardProps, bem, cEx, makePropsFilter } from 'utils'
import InputComponent from './InputComponent'
import LayoutFlex from 'layouts/Flex'
//import Label from './Label'
/* external imports */


const BEM = makeBem('single-input')

const labelBem = BEM.element('label');
const inputBem = BEM.element('input');


const Label = compose(
  withBem(labelBem),
  withModifiers(x => labelBem.modifier(x).current, ['error'])
)(baseElement('label'))



const Error = compose(
  withBem(BEM.element('error')),

)(baseElement('div'))



const Container = compose(
  withBem(BEM),
  withModifiers(x => BEM.modifier(x).current, ['error']),
  withModifiers((k,v) => BEM.modifier(`${k}-${v}`).current, ['checkbox']),
  applyModifiers({column:true, alignStart:true})
)(LayoutFlex)

const Input = compose(
  withBem(inputBem),
  withModifiers(x => inputBem.modifier(x).current, ['error'])

)(InputComponent)


export default props => {
  const { label, id, error,checkbox, ...rest } = props
  const [filterFlex,forwardFlex]   = makePropsFilter('flex')
  const [filterLabel,forwardLabel] = makePropsFilter('label')
  const [filterInput,forwardInput] = makePropsFilter('input')

  const [_flexProps, notFlexProps]   = filterFlex(rest);
  const [_labelProps, notLabelProps] = filterLabel(notFlexProps);
  const [_inputProps, notInputProps] = filterInput(notLabelProps);


  // default type to text 


  return (
    <Container error={error} checkbox={checkbox} {...forwardFlex(_flexProps)}>
      <Label error={error} htmlFor={id} {...forwardLabel(_labelProps)}>
        {label}
        {error && error !== true && <Error>{error}</Error>}
      </Label>
      <Input id={id} error={error} {...forwardInput(_inputProps)} {...notInputProps}/>
    </Container>
  )
}
