import React, { useEffect, useState, useRef } from 'react';
import 'sass/projects/gka/style.scss';
import 'sass/projects/hermod/style.scss';

import LayoutFlex from 'layouts/Flex'
import Fullscreen from 'containers/Fullscreen'
import { withKnobs, text, boolean, number, optionsKnob as options } from "@storybook/addon-knobs";
import { makeThemeSelect } from 'stories/theme-knobs'
import { bem, compose, baseElement, applyModifiers, withVariables, withModifiers, wrapComponent, asideElement, divElement, withBaseClass, cEx } from 'utils'
import { camelToSnakeCase, trace } from '@geekagency/composite-js'

export default {
    title: 'GeekAgency/Website',
    decorators: [withKnobs]
};

const [__base_class, element, modifier] = bem('tiled-section')

const TiledSection = compose(
   
    withBaseClass(__base_class),

    applyModifiers({column:true, justCenter: true, alignCenter: true, cover: true }),

)(LayoutFlex)


const DemoContent = props => {

    return (
        <div class="content_container flex wrap just-between">

            <article class="">
                <h3>PeerTransfer</h3>
                <p>
                    Transférez rapidement vos fichiers depuis votre navigateur, sans intermédiaire. Confidentialité maximale et rien ne trainera plus sur Internet.

              <br /><br />

Fonctionne sous Chrome  ou Firefox.
              <br />
                    <br />

              statut: en développement
            </p>
            </article>
            <article class="">
                <h3>Hermod</h3>
                <p>
                    L'app de communication du futur qui ne requiert aucun stockage centralisé des informations que vous échangez.<br /><br />
                A l'origine, développé pour la télémédecine, il permettra à terme de collaborer efficacement avec vos collaborateurs et collègues.


                <br /><br />

                Fonctionne sous Chrome  ou Firefox.
                <br /><br />
                statut: pré-alpha
            </p>
            </article>

            <article class="">
                <h3>BluSky</h3>
                <p>
                    Stockez, sauvegardez et partagez vos fichiers dans votre cercle de confiance. Le disque externe sans compromis.
              <br /><br />
                statut: en développement
            </p>
            </article>

        </div>)
}

export const Tile = props => {
    return (
        <div className={makeThemeSelect()}>
             <TiledSection>
             <header>
                    <h1 class="page-title">Projets en cours</h1>
                </header>
             </TiledSection>
            <TiledSection>
                <header>
                    <h1 class="page-title">Projets en cours</h1>
                </header>
                <DemoContent></DemoContent>
            </TiledSection>
            <div className={' cover cover--v-center '}>
            <header>
                    <h1 class="page-title">Projets en cours</h1>
                </header>
                <DemoContent></DemoContent>


            </div>

        </div>
    )
}