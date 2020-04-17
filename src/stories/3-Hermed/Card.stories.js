import React, { useEffect, useState, useRef } from 'react';
import 'sass/style.scss';


import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'

import FullScreen from 'containers/Fullscreen'
import Modal from 'containers/Modal'
import LayoutFlex from 'layouts/Flex'
import Button from 'components/Button'
import { TiWarning } from 'react-icons/ti'

import Card from 'components/Card'
import CardModal from 'components/Card/Modal'
import BackgroundOverlay from 'components/BackgroundOverlay'
import WaitingRoom from 'components/WaitingRoom'
import Patient from 'components/Patient'
import { Warning } from 'components/Icons';

export default {
  title: "Hermed/Card",
  decorators: [withKnobs]
};
export const CardSchemeTest = () => (
  <div className={makeThemeSelect()}>
    <FullScreen>
      <LayoutFlex cover centered className="scheme-card__background layout-card">

        <LayoutFlex justBetween column className="card scheme-card__content" style={{ width: '300px', height: '300px' }}>
          <h2>Erreur de connection</h2>
          <TiWarning style={{ width: '100px', height: '100px' }} />
          <div>
            Vous avez perdu la connexion. Assurez-vous que votre câble internet soit branché ou que vous captez suffisamment le Wifi ou la 4G.
            </div>

          <div>
            Reconnexion automatique dans 10s
            </div>
          <LayoutFlex justEvenly alignStretch >
            <Button fit text> sauvegarder ET QUITTER</Button>
            <Button fit>RÉESSAYER</Button>
          </LayoutFlex>
        </LayoutFlex>
      </LayoutFlex>
    </FullScreen>
  </div>
);


export const CardComponents = () => (
  <div className={makeThemeSelect()}>
    <FullScreen>
      <BackgroundOverlay>

        <Card>
          <h2>Erreur de connection</h2>
          <TiWarning style={{ width: '100px', height: '100px' }} />
          <div>
            Vous avez perdu la connexion. Assurez-vous que votre câble internet soit branché ou que vous captez suffisamment le Wifi ou la 4G.
          </div>

          <div>
            Reconnexion automatique dans 10s
          </div>
          <LayoutFlex justEvenly alignStretch >
            <Button fit text> sauvegarder ET QUITTER</Button>
            <Button fit>RÉESSAYER</Button>
          </LayoutFlex>
        </Card>
      </BackgroundOverlay>
    </FullScreen>
  </div>
)
const sampleUser3 = {
  name: "Fabien Di Tore",
  email: "fabien@ditore.ch",
  birthdate: "24.02.1982"
}

export const ModalCardWithSomethingUnder = () => (
  <div className={makeThemeSelect()}>
    <FullScreen>
      <Modal cover>
        <BackgroundOverlay centered>

          <Card>
            <h2>Erreur de connection</h2>
            <TiWarning style={{ width: '100px', height: '100px' }} />
            <div>
              Vous avez perdu la connexion. Assurez-vous que votre câble internet soit branché ou que vous captez suffisamment le Wifi ou la 4G.
          </div>

            <div>
              Reconnexion automatique dans 10s
          </div>
            <LayoutFlex justEvenly alignStretch >
              <Button fit text> sauvegarder ET QUITTER</Button>
              <Button fit>RÉESSAYER</Button>
            </LayoutFlex>
          </Card>
        </BackgroundOverlay>
      </Modal>
      <WaitingRoom
        handleBack={_ => alert('hey burger')}
        displayToolbar
        toolbarHandleAdd={x => x}>
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
      </WaitingRoom>
    </FullScreen>
  </div>
)



export const ModalComponent = () => (
  <div className={makeThemeSelect()}>
    <FullScreen>
      <CardModal>
        <h2>oh non</h2>
        <Warning xl/>
        <Button>Prout</Button>
      </CardModal>
      <WaitingRoom
        handleBack={_ => alert('hey burger')}
        displayToolbar
        toolbarHandleAdd={x => x}>
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
        <Patient
          status="whut"
          handleContextual={x => alert('menu')}
          handleClick={x_ => alert('hey')}
          contact={sampleUser3}
        />
      </WaitingRoom>
    </FullScreen>
  </div>
)

export const CardWithoutContainer = () => (
  <div className={makeThemeSelect()}>
    <FullScreen>

      <Card>
        <h2>Erreur de connection</h2>
        <TiWarning style={{ width: '100px', height: '100px' }} />
        <div>
          Vous avez perdu la connexion. Assurez-vous que votre câble internet soit branché ou que vous captez suffisamment le Wifi ou la 4G.
          </div>

        <div>
          Reconnexion automatique dans 10s
          </div>
        <LayoutFlex justEvenly alignStretch >
          <Button fit text> sauvegarder ET QUITTER</Button>
          <Button fit>RÉESSAYER</Button>
        </LayoutFlex>
      </Card>
    </FullScreen>
  </div>
)