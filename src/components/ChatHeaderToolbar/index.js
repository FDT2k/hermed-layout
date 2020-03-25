import React from 'react'

import { MdVideocam } from "react-icons/md";
import { MdVideocamOff } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export default props => {

  return (
    <>
    <button className="button text icon icon--32"><MdVideocam/></button>
    <button className="button text icon icon--32"><MdLocalPhone/></button>
    </>
  )
}
