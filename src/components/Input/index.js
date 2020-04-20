import React, { useEffect, useRef } from 'react'
import { baseElement, withBem, withModifiers, compose, makeBem, filterPropStartingWith, forwardProps, bem, cEx } from 'utils'
import InputComponent from './InputComponent'
//import Label from './Label'
/* external imports */


const BEM = makeBem('single-input')

const labelBem = BEM.element('label');
const inputBem = BEM.element('input');

const labelProps = filterPropStartingWith('label');
const forwardLabelProps = forwardProps('label');
const forwardInputProps = forwardProps('input');
const inputProps = filterPropStartingWith('input');

const Label = compose(
  withBem(labelBem),
  withModifiers(x => labelBem.modifier(x).current, ['error'])
)(baseElement('label'))



const Error = compose(
  withBem(BEM.element('error')),

)(baseElement('div'))


const Container = compose(
  withBem(BEM),
  withModifiers(x => BEM.modifier(x).current, ['error','checkbox'])

)(baseElement('div'))


const Input = compose(
  withBem(inputBem),
  withModifiers(x => inputBem.modifier(x).current, ['error'])

)(InputComponent)


export default props => {
  const { label, id, error, ...rest } = props

  const [_labelProps, notLabelProps] = labelProps(rest);
  const [_inputProps, notInputProps] = inputProps(notLabelProps);


  // default type to text 


  return (
    <Container error={error}>
      <Label error={error} htmlFor={id} {...forwardLabelProps(_labelProps)}>
        {label}
        {error && error !== true && <Error>{error}</Error>}
      </Label>
      <Input id={id} error={error} {...forwardInputProps(_inputProps)} {...notInputProps}/>
    </Container>
  )
}
