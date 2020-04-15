import React from 'react';

import { spreadObjectPresentIn, spreadObjectBeginWith, forwardPropsRemovingHeader } from '@geekagency/composite-js/ReactUtils'
import { curry, enlist, key, compose } from '@geekagency/composite-js'
import { cEx } from '@geekagency/gen-classes'

const bem = main => {
    return (
        [
            main,
            block => `${main}__${block}`,
            modifier => `${main}--${modifier}`

        ])
}


export const bemO = main => {
    return {
        block: main,
        element: block => `${main}__${block}`,
        modifier: modifier => `${main}--${modifier}`

    }

}

export const wrapComponent = Wrap => Component=> props => <Wrap {...props}><Component/></Wrap>

export const divElement = ({ children, ...rest }) => <div {...rest}>{children}</div>
export const sectionElement = ({ children, ...rest }) => <section {...rest}>{children}</section>

export const modifiersToCeX = (keyEnhancer, list, modifiers) => {
    return list.reduce((acc, item) => {
        acc[keyEnhancer(item)] = _ => modifiers[item] === true;
        return acc
    }, {})
}

export const propsToCeX = (keyEnhancer, list, modifiers) => {
    return list.reduce((acc, item) => {
        acc.push( _=> keyEnhancer(modifiers[item]))
        return acc
    }, [])
}


export const withBaseClass = BaseClass => Component => props => {
    const { className, ...rest } = props;
    const classes = cEx([
        BaseClass,
        className
    ])
    return <Component {...rest} className={classes} />
}


export const withModifiers = (namer, modifiers) => Component => props => {
    const { className, ...rest } = props; //ensure to preserve classNames
    const [presentModifiers, _props] = spreadObjectPresentIn(modifiers, rest)
    const classes = cEx([
        className,
        modifiersToCeX(namer, modifiers, presentModifiers)
    ]);
    return <Component className={classes} {..._props}/>
}



export const withTransformedProps = (namer, modifiers) => Component => props => {
    const { className, ...rest } = props; //ensure to preserve classNames
    const [presentModifiers, _props] = spreadObjectPresentIn(modifiers, rest)
    //console.error(presentModifiers,modifiers)
    //console.log(propsToCeX(namer, modifiers, presentModifiers))
    const classes = cEx([
        className,
        ...propsToCeX(namer, enlist(presentModifiers), presentModifiers)
    ]);

    return <Component className={classes} {..._props}/>
}

export const applyModifiers = (modifiers) => Component => props => {

    return <Component {...modifiers} {...props} />
}

export {
    spreadObjectBeginWith as filterPropStartingWith,
    spreadObjectPresentIn as filterPropPresentIn,
    forwardPropsRemovingHeader as forwardProps,
    bem,
    cEx
}


export { compose }