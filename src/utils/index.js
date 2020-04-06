import {spreadObjectBeginWith,forwardPropsRemovingHeader} from '@geekagency/composite-js/ReactUtils'
import {curry} from '@geekagency/composite-js'
import { cEx } from '@geekagency/gen-classes'

const bem = main => { 
    return (
    [   
        main,
        modifier=> `${main}--${modifier}`
    ])
}

export{
     spreadObjectBeginWith as filterPropStartingWith,
     forwardPropsRemovingHeader as forwardProps,
     bem,
     cEx

     
}