import React from 'react';
import { bem, makeBem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'
import { BEM as ParentBem } from '../index';


const { current, block, modifier } = ParentBem.make.element('item')


const ServiceItemHeader = ({ title, price, children, ...rest }) => (
    <header {...rest}>
        <h4>{title}:</h4>
        <p className={block('price')}>{price}</p>
    </header>
)

const ServiceItem = ({ title, priceLabel, label, hint, ...rest }) => {

    return (
        <div {...rest}>
            <ServiceItemHeader title={title} price={priceLabel} className={block('title')}/>
            <p>{label}</p>
            <p><i>{hint}</i></p>
        </div>
    )
}


const enhance = compose(
    withBaseClass(current)
)

export default enhance(ServiceItem);