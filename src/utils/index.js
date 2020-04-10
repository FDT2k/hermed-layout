import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'
import {curry} from '@geekagency/composite-js'
import { cEx } from '@geekagency/gen-classes'

const bem = main => { 
    return (
    [   
        main,
        block=> `${main}__${block}`,
        modifier=> `${main}--${modifier}`
        
    ])
}

export{
     spreadObjectBeginWith as filterPropStartingWith,
     forwardPropsRemovingHeader as forwardProps,
     bem,
     cEx

     
}

export const bemO = main=>{
    return  {  
            block:main,
            element:block=> `${main}__${block}`,
            modifier: modifier=> `${main}--${modifier}`
            
        }
    
}