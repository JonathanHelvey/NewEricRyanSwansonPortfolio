import React from 'react';
import { navigate } from 'gatsby';
import Button from '@mui/material/Button';
import {
  // eslint-disable-next-line max-len
  HeroWrapper, SiteHeaderTitle, SubHeaderTitle, MyButton, Container, MyImage, PhoneHeaderTitle, PhoneHeaderTitleWrapper,
} from './Hero.styled';
import image from '../../data/headshots/eric-swanson-005-web-FINAL.jpg';
import HeroCards from '../HeroCards';

function Hero() {
  return (
    <HeroWrapper>
      <Container>
        <div>
          <SiteHeaderTitle>Eric Ryan Swanson</SiteHeaderTitle>
          <SubHeaderTitle>Theatre Artist & Film Actor</SubHeaderTitle>
          <HeroCards />
        </div>
        <div>
          <>
          </>
        </div>
      </Container>
    </HeroWrapper>
  );
}

export default Hero;
