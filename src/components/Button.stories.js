import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  exludeStories: /.*Data$/, 
};

export const ButtonData = {
  tet: 'ButtonData'
};

export const actionsData = {
  onClick: action('ButtonClick'),
};

export const Default = () => <Button {...actionsData}>SimpBut</Button>
