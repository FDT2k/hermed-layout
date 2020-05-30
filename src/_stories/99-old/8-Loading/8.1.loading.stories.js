import React from 'react';
import { action,notes } from '@storybook/addon-actions';
import ThemePicker from 'components/ThemePicker'
import 'sass/style.scss';


import Loading from 'components/Loading'


export const Normal = () => (
  <ThemePicker>
    <Loading title="Chargement ..."/>
  </ThemePicker>
);

export const Centered = () => (
    <ThemePicker>
      <Loading centered  title="Chargement ..."/>
    </ThemePicker>
  );

export const Inverse = () => (
  <ThemePicker>
    <Loading inverse  title="Chargement ..."/>
  </ThemePicker>
);

export const CenteredInverse = () => (
    <ThemePicker>
      <Loading centered inverse  title="Chargement ..."/>
    </ThemePicker>
);



export const NormalLabel = () => (
  <ThemePicker>
    <Loading label="Chargement en cours" title="Chargement ..."/>
  </ThemePicker>
);

export const CenteredLabel = () => (
    <ThemePicker>
      <Loading label="Chargement en cours" centered  title="Chargement ..."/>
    </ThemePicker>
  );

export const InverseLabel = () => (
  <ThemePicker>
    <Loading label="Chargement en cours" inverse  title="Chargement ..."/>
  </ThemePicker>
);

export const CenteredInverseLabel = () => (
    <ThemePicker>
      <Loading label="Chargement en cours" centered inverse  title="Chargement ..."/>
    </ThemePicker>
);

export const CenteredInverseLabelSpinning = () => (
    <ThemePicker>
      <Loading label="Chargement en cours" centered inverse type="spinningBubbles"  title="Chargement ..."/>
    </ThemePicker>
);

export default {
  title: 'Loading',
};
