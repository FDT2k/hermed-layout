import React,{useRef,useState,useEffect} from 'react'
import { compose } from '@geekagency/composite-js'
import { bem,applyModifiers, withModifiers,withBaseClass, wrapComponent, divElement, cEx, baseElement } from 'utils'


export default props => {
    const {children,...otherProps} = props;
    const [index,setIndex] = useState(0);
    const [hash,setHash] = useState(window.location.hash || '');
    const ref = useRef();
    const ref2 = useRef();
    const dots = Array.from({ length: props.children.length }, (v, i) => i)
    const goto = x => {
        let v = ref.current.getBoundingClientRect().width * x;

        console.log(v)
        ref2.current.scrollLeft = v;
        setIndex(x);
    }


    const hashListener = ()=> {
        setHash(window.location.hash);
       
       
    }

    useEffect(()=>{
        React.Children.forEach(children, (element,idx) => {
            if (!React.isValidElement(element)) return
          
            const { anchor } = element.props
            console.log(anchor,idx);
            console.log(window.location.hash)
            if(`#${anchor}` === hash){
                goto(idx);
            }
            //do something with source..
          })
    },[hash])

    useEffect(()=>{
        window.addEventListener('hashchange',hashListener)

        return ()=> {
            window.removeEventListener('hashchange',hashListener)
        }
    },[]);


    
    return (
        <div className="horizontal-tile-group" >

            <div ref={ref2} className="horizontal-tile-group--container ">
                <div ref={ref} className="horizontal-tile-group--content">
                    {props.children}
                </div>
            </div>

            <div className="horizontal-tile-group--dots">{
                dots.map((item,i) => <div className={cEx([{active: _=>index === i}])} onClick={_ => goto(item)}>o</div>)
            }
            </div>
            
            <div className="horizontal-tile-group--overlay horizontal-tile-group--overlay__left">

            </div>
        </div>
    )

}

