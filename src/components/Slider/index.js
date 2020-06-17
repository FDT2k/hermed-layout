import React,{useState} from 'react';
import { bem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'

const [__base_class, element, modifier] = bem('slider-container')

const SliderContainer = compose(
    withBaseClass(__base_class)
)(baseElement('div'))




const RangeInput = props => {
    const {value:defaultValue, onChange,...rest} = props;
    const [value,setValue] = useState(defaultValue||0)
    console.log(defaultValue,value)
    const _onChange = e=> {
        setValue(parseInt(e.target.value))
        onChange && onChange(e)
    }
    return <input type="range" onChange={_onChange} value={value} {...rest} />
}

const SliderInput = compose(
    withBaseClass('slider')
)(RangeInput)


export default props => {
    return (
        <SliderContainer>
            <SliderInput name="hello" value={50}/>
        </SliderContainer>
    )
}