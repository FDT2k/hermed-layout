import 'sass/style.scss'

import ChatBubble from 'components/ChatBubble'
import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import Button from 'components/Button'
import Form from 'components/Form'
import Input from 'components/Input'
import InputCheckbox from 'components/InputCheckbox'
import Select from 'components/Input/Select'
import OrganiserConfigurationForm from 'components/OrganiserConfigurationForm'

import Header from 'components/Header'
import HeaderTitle from 'components/Header/Title'
import HeaderToolbar from 'components/Header/Toolbar'
import HeaderBackButton from 'components/Header/BackButton'
import ChatHeaderStatus from 'components/Header/Chat/UserStatus'
import ChatHeaderToolbar from 'components/Header/Chat/Toolbar'
import ChatHeader from 'components/Header/Chat'
import Loading from 'components/Loading'
import Calling from 'components/Calling'
import Video from 'components/Video'
import ActiveCallBar from 'components/ActiveCallBar'
import Badge from 'components/Badge'
import DebugPanel from 'components/DebugPanel'
import Sidebar from 'components/Sidebar'
import SidebarList from 'components/Sidebar/List'
import SidebarListItem from 'components/Sidebar/List/Item'


/* Full views exporting */
import Chat from 'views/Chat'
import Landing from 'views/Landing'
import CustomerLanding from 'views/Landing/Customer'
import OrganiserLanding from 'views/Landing/Organiser'
import VideoCall from 'views/VideoCall'

import Fullscreen from 'containers/Fullscreen'
import Stack from 'containers/Stack'
import Modal from 'containers/Modal'
import Container from 'containers/Container'


import LayoutGrid from 'layouts/Grid'
import LayoutFlex from 'layouts/Flex'

import Card from 'components/Card'
import CardContainer from 'components/Card/Container'
import * as Icons from 'components/Icons'
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
  InputCheckbox,
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
  ActiveCallBar,
  Badge,
  DebugPanel,
  Sidebar,
  SidebarList,
  SidebarListItem,
  VideoCall,
  Fullscreen as MobileVHAdapter,

  Container,
  Fullscreen,
  Stack,
  Modal,
  
  LayoutGrid,
  LayoutFlex,
  Card,
  CardContainer,
  Icons
}
