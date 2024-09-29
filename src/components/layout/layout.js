import React from 'react';
import PropTypes from 'prop-types';
import { StyledEngineProvider } from '@mui/material/styles'; // If using MUI v5
import { ThemeProvider } from 'styled-components'; // If using styled-components
import { theme } from '../../themes/theme'; // Define your MUI theme
import { GlobalStyles } from '../../themes/global';

const Layout = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <main>{children}</main>
      </>
    </ThemeProvider>
  </StyledEngineProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
