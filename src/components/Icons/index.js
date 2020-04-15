import React from 'react'
import { compose } from '@geekagency/composite-js'
import { withModifiers, withBaseClass, cEx } from 'utils'
import { TiWarning } from 'react-icons/ti'
import { MdCall, MdCallEnd } from 'react-icons/md'
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { MdCameraAlt } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { MdCloudUpload } from "react-icons/md";
import { MdVideocam } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { GoKebabVertical } from 'react-icons/go'
import { GoGear } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";



const withIconsModifiers = compose(
    withBaseClass('icon'), 
    withModifiers(x => `icon--${x}`, ['xs', 's', 'm', 'l', 'xl'])
)



const Hamburger = withIconsModifiers(GiHamburgerMenu)
const Warning = withIconsModifiers(TiWarning)
const Call = withIconsModifiers(MdCall)
const CallEnd = withIconsModifiers(MdCallEnd)
const ArrowForward = withIconsModifiers(MdArrowForward)
const ArrowBack = withIconsModifiers(MdArrowBack)
const Camera = withIconsModifiers(MdCameraAlt)
const AttachFile = withIconsModifiers(MdAttachFile)
const Voice = withIconsModifiers(MdKeyboardVoice)
const Videocam = withIconsModifiers(MdVideocam)
const PersonAdd = withIconsModifiers(MdPersonAdd)
const LocalPhone = withIconsModifiers(MdLocalPhone)
const Trash = withIconsModifiers(FaRegTrashAlt)
const PowerOff = withIconsModifiers(FaPowerOff)
const Kebab = withIconsModifiers(GoKebabVertical)
const Gear = withIconsModifiers(GoGear)
const Upload = withIconsModifiers(MdCloudUpload)


export {

    Warning,
    Call,
    CallEnd,
    ArrowForward,
    ArrowBack,
    Camera,
    AttachFile,
    Voice,
    Videocam,
    PersonAdd,
    LocalPhone,
    Trash,
    PowerOff,
    Kebab,
    Gear,
    Hamburger,
    Upload
}