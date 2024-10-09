import { styled } from '@mui/material/styles';
import {
  Card, CardContent, Typography, Container,
} from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '40px',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  color: theme.palette.text.primary,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(2),
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: '#FF9900',
  color: '#ffffff',
  padding: theme.spacing(1),
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  borderRadius: '4px',
}));