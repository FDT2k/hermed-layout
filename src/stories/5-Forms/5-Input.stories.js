import React,{useEffect,useState,useRef} from 'react';
import 'sass/style.scss';

import Input from 'components/Input'
import InputCheckbox from 'components/InputCheckbox'
import InputChatMessage from 'components/InputChatMessage'
import Select from 'components/Select'

import ThemePicker from 'components/ThemePicker'


export const  SingleInput =()=>
    <ThemePicker>
      <Input label="Name"/>
    </ThemePicker>

export const  SingleInputWithCaretPositioned =()=>
    <ThemePicker>
      <Input label="Name" defaultValue="abcd" />
    </ThemePicker>


export const  SingleSelect =()=>
    <ThemePicker>
      <Select label="Pick something">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    </ThemePicker>

export const  SingleCheckbox =()=>
    <ThemePicker>
      <InputCheckbox label="SSL"/>
    </ThemePicker>

export const  InputMaskDate =()=>{
  /*  const ref = useRef();
    const mask_type = 'dd/dd/dddd';
    const mask_display = 'JJ/MM/YYYY'

    const [value,setValue] = useState('');
    const [caret,setCaret] = useState(0);


    const mask_types = 'dc'
    const mask_check = {
      'c': /[a-zA-Z]/,
      'd': /[0-9]/
    }

    const validateMask = e=> {
      let value = e.target.value
      let m = mask_type.split('')
      let md = mask_display.split('')
      let caretPos = caret;
      value = value.split('').map(
        (char,idx)=> {
          let _midx= idx;
          let res = '';

          while( mask_types.indexOf(m[_midx]) == -1 && _midx < mask_type.length){
            let disp = md[_midx] ? md[_midx] : m[_midx]
            res = `${res}${disp}`;
            _midx++
          }

          if(mask_check[m[_midx]] && mask_check[m[_midx]].test(char)){
            res= `${res}${char}`
          }
          caretPos=caret+1  ;


          return res;
        }
      ).join('')

      setCaret(caretPos)
      setValue(value)
    }
*/
    return(

      <ThemePicker>
        <Input mask="99/99/9999" placeholder="Enter birthdate" />
      </ThemePicker>
      )
}



export const  SingleInputChatMessage =()=>
    <ThemePicker>
      <InputChatMessage placeholder="Message"/>
    </ThemePicker>

export default {
  title: 'Form/Input',
};
