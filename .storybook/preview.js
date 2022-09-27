import '../src/index.css'
import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/styles';

import { muiTheme } from '../src/styles';

addDecorator((story) => (
    <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}