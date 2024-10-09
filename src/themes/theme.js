import { createTheme, styled } from '@mui/material/styles';
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
      sm: 540, // Custom sm breakpoint
      md: 766, // Custom md breakpoint
      lg: 1020, // Custom lg breakpoint
      xl: 1600, // Custom xl breakpoint
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
// Styled Components using MUI's styled function
export const StyledGrid = styled(Grid)(({ theme }) => ({
  alignSelf: 'center',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    flexBasis: '100%',
  },
}));

export const Section1 = styled('div')(({ theme, Primary }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1vh 4vw',
  backgroundColor: Primary ? theme.palette.text.secondary : theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    paddingLeft: '14vw',
    paddingRight: '14vw',
  },
}));

export const SectionHeader = styled('div')(({
  theme, Primary, Secondary, Third, Center, Right, Left,
}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: Center ? 'center' : Right ? 'flex-end' : Left ? 'flex-start' : 'stretch',
  flexDirection: 'column',
  backgroundAttachment: 'fixed',
  padding: '4vw 15vw',
  height: '40vh',
  width: 'auto',
  backgroundColor: Primary ? theme.palette.text.secondary
    : Secondary ? theme.palette.secondary.main
      : Third ? theme.palette.primary.main : 'transparent',
  [theme.breakpoints.down('md')]: {
    fontSize: '34px',
  },
}));

export const Header1 = styled('h1')(({
  theme, lg, md, sm, Center, Right, Left,
}) => ({
  fontWeight: 'bolder',
  fontSize: lg ? '60px' : md ? '50px' : sm ? '46px' : 'inherit',
  textAlign: Center ? 'center' : Right ? 'right' : Left ? 'left' : 'inherit',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '34px',
  },
}));

export const Header2 = styled('h2')(({
  theme, italic, lg, md, sm, Center, Right, Left,
}) => ({
  fontWeight: 'bolder',
  fontStyle: italic ? 'italic' : 'normal',
  fontSize: lg ? '42px' : md ? '32px' : sm ? '22px' : 'inherit',
  color: theme.palette.text.secondary,
  textAlign: Center ? 'center' : Right ? 'right' : Left ? 'left' : 'inherit',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
}));
