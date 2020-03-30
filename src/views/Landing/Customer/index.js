
import React,{useState} from 'react'
import Button from 'components/Button'
import Input from 'components/Input'
import Form from 'components/Form'


import Landing from 'views/Landing'


export default props => {
 const {handleClick,identity} = props;
 const [value,setValue] = useState('')

 const _handleClick = (e)=>{
   handleClick && handleClick(value);
   e.preventDefault()

 }

 return (
   <Landing customer>
     <p className="text--center">
       {identity || 'Votre docteur'} vous invite à rejoindre sa salle d'attente pour une consultation à distance.
       Lorsque vous êtes prêts, cliquez sur le bouton ci-dessous pour la rejoindre.
     </p>
     <Form onSubmit={_handleClick}>
       <Input mask="99.99.9999" label="Votre date de naissance" name="birthday" placeholder="JJ.MM.YYYY" onChange={e=>setValue(e.target.value)} value={value} autoComplete="off"/>
       <Button>JE SUIS PRÊT !</Button>
     </Form>
   </Landing>
 )
}
