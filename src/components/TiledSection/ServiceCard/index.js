import React from 'react';
import { bem, makeBem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'
import LayoutFlex from 'layouts/Flex'


export const BEM =   makeBem ('gka-service-card')

const {current} = BEM;



const ServiceCard=  ({ title, hint, buttonLabel, handleClick, children,...rest }) => {

    return (

        <article {...rest}>
            <div className={BEM.block("title")}>
                <h3>{title}</h3>
            </div>
            <LayoutFlex column>
                {children}
            </LayoutFlex>
            <LayoutFlex column justEnd>
                <p className={BEM.block('hint')}>{hint && hint.map(
                    item => (<React.Fragment key={item}>{item}<br/></React.Fragment>)
                )}</p>
                <button onClick={handleClick}>{buttonLabel}</button>
                
            </LayoutFlex>
        </article>
    )
}

const enhance = compose(
    withBaseClass(current)
)


export default enhance(ServiceCard)