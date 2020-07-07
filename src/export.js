import 'sass/style.scss'

import ChatBubble from 'components/ChatBubble'
import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import Button from 'components/Button'
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Input/Select'

import Header from 'components/Header'
import HeaderBackButton from 'components/Header/BackButton'
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
import VideoCall from 'views/VideoCall'

import Fullscreen from 'containers/Fullscreen'
import Stack from 'containers/Stack'
import Modal from 'containers/Modal'
import Container from 'containers/Container'


import LayoutGrid from 'layouts/Grid'
import LayoutFlex from 'layouts/Flex'

import Card from 'components/Card'
import CardContainer from 'components/Card/Modal'

import DropzoneOverlay from 'components/DropzoneOverlay'

import * as Icons from 'components/Icons'
export {
  Chat,
  Landing,
  ChatBubble,
  
  WaitingRoom,
  Patient,
  Button,
  Form,
  Input,
  Select,
  Header,

  Loading,
 
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
  Icons,
  DropzoneOverlay
}
