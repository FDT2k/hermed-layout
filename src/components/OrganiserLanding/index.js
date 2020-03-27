
import React,{useState} from 'react'
import Landing from '../Landing'

import OrganiserConfigurationForm from '../OrganiserConfigurationForm'

export default props => {
 const {handleSubmit} = props;

 return (
     <Landing>
       <OrganiserConfigurationForm handleSubmit={handleSubmit}/>
     </Landing>
 )
}
