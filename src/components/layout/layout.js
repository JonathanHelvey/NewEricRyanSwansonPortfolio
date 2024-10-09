import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../themes/theme';
import { GlobalStyles } from '../../themes/global';

function Layout({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <main>{children}</main>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;