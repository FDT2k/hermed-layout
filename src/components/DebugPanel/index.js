import React,{useState} from 'react'
import 'sass/style.scss';
import {cEx} from '@geekagency/gen-classes'
import Button from 'components/Button'

export default props => {

  const {HiddenComponent,VisibleComponent} = props;

  const [visible, setVisible] = useState(false)

  return (
    <div className={cEx([
      'debug-panel',
      {
        'visible':_=>visible===true,
        'hidden':_=>visible!==true
      }
      ])}>

      <div className="content-closed"><HiddenComponent openHandler={_=> setVisible(true)}/></div>
      <div className="content"><VisibleComponent closeHandler={_=> setVisible(false)}/></div>

    </div>
  )
}
