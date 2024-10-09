import { styled } from '@mui/material/styles';

export const SectionFooter = styled('div')(({ theme }) => ({
  height: '50vh',
  margin: -10,
  padding: 0,
  backgroundColor: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '15vw',
  marginTop: '5vh',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    marginRight: 0,
    marginTop: 0,
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    marginRight: 0,
    marginTop: '50px',
  },
}));

export const SiteTitle = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '12px',
  display: 'flex',
  flexDirection: 'column',
}));

export const CopyWrightDiv = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '12px',
  marginTop: '2vh',
  paddingBottom: '2vh',
  display: 'flex',
  justifyContent: 'center',
}));