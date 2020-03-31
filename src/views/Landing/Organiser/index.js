
import React,{useState} from 'react'
import Landing from 'views/Landing'

import OrganiserConfigurationForm from 'components/OrganiserConfigurationForm'

export default props => {
 const {handleSubmit} = props;

 return (
     <Landing>
       <OrganiserConfigurationForm handleSubmit={handleSubmit}/>
     </Landing>
 )
}
