
import React,{useState} from 'react'
import Button from '../Button'
import Landing from '../Landing'
import Input from '../Input'


export default props => {
 const {handleClick,identity} = props;
 const [value,setValue] = useState('')

 const _handleClick = ()=>{
   handleClick && handleClick(value);
 }

 return (
   <Landing customer>
     <p className="text--center">
       {identity || 'inconnu'} vous invite à rejoindre sa salle d'attente pour une consultation à distance. Lorsque vous êtes prêts, cliquez sur le bouton ci-dessous pour la rejoindre.
     </p>
     <Input label="Votre date de naissance" name="birthday" placeholder="JJ.MM.YYYY" onChange={e=>setValue(e.target.value)} value={value} autoComplete="off"/>
     <Button onClick={_handleClick}>JE SUIS PRÊT !</Button>
   </Landing>
 )
}
