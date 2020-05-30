import React, { useEffect, useRef } from 'react'

import InputMask from 'react-input-mask'
import InputCheckbox from 'components/Input/InputCheckbox'
export default props => {
    const { type,id, ...rest } = props;
    const _type = type || 'text'
  
    return (
      <>
        {type !== "checkbox" && <InputMask
          id={id}
          type={_type}
          autoComplete="off" {...rest} />}
        {type === "checkbox" && <InputCheckbox
          id={id} 
          {...rest} />}
      </>)
  }