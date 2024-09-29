// src/themes/theme.js

import { createTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

// Create a MUI theme
export const theme = createTheme({
  palette: {
    primary: {
      main: '#663399', // primaryPurple
      contrastText: '#ffffff', // Text color on primary
    },
    secondary: {
      main: '#819C8D', // primaryGreen
      contrastText: '#ffffff', // Text color on secondary
    },
    background: {
      default: '#ffffff', // primaryLight
      paper: '#f5f5f5', // light gray for paper backgrounds
    },
    text: {
      primary: '#212629', // primaryDark
      secondary: '#909496', // primaryLightDark
      disabled: '#cccccc', // For disabled text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '60px',
      fontWeight: 'bolder',
      '@media (max-width: 1020px)': {
        fontSize: '34px',
      },
    },
    h2: {
      fontSize: '42px',
      fontWeight: 'bolder',
      '@media (max-width: 1020px)': {
        fontSize: '24px',
      },
    },
    // Define other typography variants as needed
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,  // Custom sm breakpoint
      md: 766,  // Custom md breakpoint
      lg: 1020, // Custom lg breakpoint
      xl: 1600, // Custom xl breakpoint
      xxl: 1800, // Optional: Extra breakpoint
    },
  },
  // Add custom properties if needed
  custom: {
    mobile: {
      xs: '540px',
      sm: '766px',
      md: '1020px',
      lg: '1600px',
      xl: '1800px',
    },
  },
});

// Styled Components using MUI's Grid component
export const StyledGrid = styled(Grid)`
  align-self: center;
  @media (max-width: ${(props) => props.theme.custom.mobile.md}) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

// Define other styled components
export const Section1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1vh 4vw;
  background-color: ${(props) =>
    props.Primary ? props.theme.palette.text.secondary : props.theme.palette.background.default};
  @media (max-width: ${(props) => props.theme.custom.mobile.md}) {
    padding-left: 14vw;
    padding-right: 14vw;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) =>
    props.Center ? 'center' : props.Right ? 'flex-end' : props.Left ? 'flex-start' : 'stretch'};
  background-attachment: fixed;
  padding: 4vw 15vw;
  height: 40vh;
  width: auto;
  background-color: ${(props) =>
    props.Primary
      ? props.theme.palette.text.secondary
      : props.Secondary
      ? props.theme.palette.secondary.main
      : props.Third
      ? props.theme.palette.primary.main
      : 'transparent'};
  @media (max-width: ${(props) => props.theme.custom.mobile.md}) {
    font-size: 34px;
  }
`;

// Header1 styled component
export const Header1 = styled.h1`
  font-weight: bolder;
  font-size: ${(props) =>
    props.lg ? '60px' : props.md ? '50px' : props.sm ? '46px' : 'inherit'};
  text-align: ${(props) =>
    props.Center ? 'center' : props.Right ? 'right' : props.Left ? 'left' : 'inherit'};
  color: ${(props) => props.theme.palette.text.primary};
  @media (max-width: ${(props) => props.theme.custom.mobile.md}) {
    font-size: 34px;
  }
`;

// Header2 styled component
export const Header2 = styled.h2`
  font-weight: bolder;
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-size: ${(props) =>
    props.lg ? '42px' : props.md ? '32px' : props.sm ? '22px' : 'inherit'};
  color: ${(props) => props.theme.palette.text.secondary};
  text-align: ${(props) =>
    props.Center ? 'center' : props.Right ? 'right' : props.Left ? 'left' : 'inherit'};
  @media (max-width: ${(props) => props.theme.custom.mobile.md}) {
    font-size: 24px;
  }
`;
