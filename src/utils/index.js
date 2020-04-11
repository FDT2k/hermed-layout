import React from 'react';

import {spreadObjectPresentIn,spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'
import {curry,enlist,key} from '@geekagency/composite-js'
import { cEx } from '@geekagency/gen-classes'

const bem = main => { 
    return (
    [   
        main,
        block=> `${main}__${block}`,
        modifier=> `${main}--${modifier}`
        
    ])
}


export const bemO = main=>{
    return  {  
            block:main,
            element:block=> `${main}__${block}`,
            modifier: modifier=> `${main}--${modifier}`
            
        }
    
}

export const modifiersToCeX = (keyEnhancer,list,modifiers)=> {
    return list.reduce((acc,item)=>{
        acc[keyEnhancer(item)]= _=> modifiers[item]=== true;
        return acc
    },{})
}


export const withBaseClass = BaseClass => Component => props => {


}


export const withModifiers = (namer, modifiers) => Component => props => {
    const [presentModifiers, _props] = spreadObjectPresentIn(modifiers, props)
    const classes = cEx([

        modifiersToCeX(namer, modifiers, presentModifiers)
    ]);
    return <div className={classes} {..._props}><Component /></div>
}


export{
    spreadObjectBeginWith as filterPropStartingWith,
    spreadObjectPresentIn as filterPropPresentIn,
    forwardPropsRemovingHeader as forwardProps,
    bem,
    cEx

    
}