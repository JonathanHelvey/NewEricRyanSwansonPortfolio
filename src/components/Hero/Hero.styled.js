import { styled } from '@mui/material/styles';
import image from '../../data/headshots/eric-swanson-005-web-FINAL.jpg';
export const HeroWrapper = styled('div')(({ theme }) => ({
  background: `url(${image}) no-repeat right center fixed`, // Changed to move the image to the right
  backgroundColor: 'black',
  backgroundSize: 'contain', // Changed from 'cover' to 'contain'
  height: '100vh', // You may adjust this if needed
  margin: '0',
  padding: '15vh', // Adjust padding if necessary for more space
}));

export const SocialIconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const MyButton = styled('button')(({ theme }) => ({
  backgroundColor: '#FF9900',
  color: '#ffffff',
  margin: '60px 40px 0 0',
  [theme.breakpoints.down('lg')]: {
    marginRight: '40px',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: '20px',
    marginBottom: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const MyImage = styled('img')(({ theme }) => ({
  height: '740px',
  marginTop: '3%',
  [theme.breakpoints.down('lg')]: {
    height: '640px',
    marginTop: '10%',
  },
  [theme.breakpoints.down('md')]: {
    height: '340px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '200px',
  },
  [theme.breakpoints.down('xs')]: {
    height: 'auto',
    marginBottom: '-50px',
  },
}));

export const SiteHeaderTitle = styled('h1')(({ theme }) => ({
  marginTop: '30vh',
  marginRight: '20vh',
  fontSize: '5vh',
  textTransform: 'uppercase',
  color: theme.palette.common.white,
  [theme.breakpoints.down('lg')]: {
    marginRight: '40px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '10vh',
    marginLeft: '10vw',
    paddingBottom: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SubHeaderTitle = styled('h2')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '20vh',
  fontSize: '2.5vh',
  textTransform: 'uppercase',
  color: theme.palette.common.white,
  [theme.breakpoints.down('xl')]: {
    fontSize: 'inherit',
  },
  [theme.breakpoints.down('lg')]: {
    marginRight: '40px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '6vh',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const PhoneHeaderTitle = styled('h2')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2.5vh',
    color: theme.palette.common.white,
  },
}));

export const PhoneHeaderTitleWrapper = styled('div')({
  margin: '.5vh',
});