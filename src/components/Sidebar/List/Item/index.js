import React, { useState } from 'react'
import { cEx, compose, applyModifiers, withBaseClass, bem, divElement } from 'utils';
import LayoutFlex from 'layouts/Flex'


const [__base_class, element, modifier] = bem('list-item')

const CellContent = compose(
  withBaseClass(element('content'))
)(LayoutFlex);

const CellOptionalContent = compose(
  withBaseClass(element('optional-content'))
)(LayoutFlex);

const Cell = compose(
  withBaseClass(__base_class),
  applyModifiers({'justBetween':true})
)(LayoutFlex);


const Component = props => {

  const { Icon, label, Optional, handleClick, ...rest } = props

  const _handleClick=  e=>{
    handleClick && handleClick(e);
    e.stopEventPropagation();
  }
  
  return (
    <Cell onClick={_handleClick}  {...rest}>
      <CellContent>
        {Icon && <Icon />}
        {props.children}
      </CellContent>
      <CellOptionalContent>
        {Optional && <Optional />}
      </CellOptionalContent>
    </Cell>
  )
}


export default Component