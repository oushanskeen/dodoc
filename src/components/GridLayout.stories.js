import React from 'react';
import { action } from '@storybook/addon-actions';

import GridLayout from './GridLayout';

export default {
  component: GridLayout,
  title: 'GridLayout',
  exludeStories: /.*Data$/,
};

export const GridData = {
  text: "Me text for grid",
};

export const actionsData = {
  onClick: action('onBoxClick'),
};

export const Default = 
() => <GridLayout {...actionsData}/> 

