import '../sass/style.scss'

import ChatBubble from 'components/ChatBubble'
import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import Button from 'components/Button'
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import OrganiserConfigurationForm from 'components/OrganiserConfigurationForm'

import Header from 'components/Header'
import HeaderTitle from 'components/HeaderTitle'
import HeaderToolbar from 'components/HeaderToolbar'
import HeaderBackButton from 'components/HeaderBackButton'
import ChatHeaderStatus from 'components/ChatHeaderStatus'
import ChatHeaderToolbar from 'components/ChatHeaderToolbar'
import ChatHeader from 'components/ChatHeader'
import Loading from 'components/Loading'
import Calling from 'components/Calling'
import Video from 'components/Video'
import MobileVHAdapter from 'components/MobileVHAdapter'
import ActiveCallBar from 'components/ActiveCallBar'


/* Full views exporting */
import Chat from 'views/Chat'
import Landing from 'views/Landing'
import CustomerLanding from 'views/Landing/Customer'
import OrganiserLanding from 'views/Landing/Organiser'


export {
  Chat,
  Landing,
  CustomerLanding,
  ChatBubble,
  ChatHeader,
  WaitingRoom,
  Patient,
  Button,
  Form,
  Input,
  Select,
  OrganiserConfigurationForm,
  OrganiserLanding,
  Header,
  ChatHeaderStatus,
  ChatHeaderToolbar,
  Loading,
  HeaderTitle,
  HeaderToolbar,
  HeaderBackButton,
  Calling,
  Video as VideoPreview,
  Video,
  MobileVHAdapter,
  ActiveCallBar
}
