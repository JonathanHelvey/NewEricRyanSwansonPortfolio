import React from 'react';
import {
  Grid,
} from '@mui/material';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  StyledContainer,
  StyledCard,
  StyledCardContent,
  TitleTypography,
} from './HeroCards.styled';

function HeroCards() {
  const data = useStaticQuery(graphql`
    query {
      microphone: file(relativePath: { eq: "icons/RealisticMic.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      demoReel: file(relativePath: { eq: "icons/RealisticReel.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      headshot: file(relativePath: { eq: "headshots/eric-swanson-132-WEB-FINAL.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      resume: file(relativePath: { eq: "icons/RealisticResume.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return (
    <StyledContainer>
      <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start">
        {/* Voice-Overs Card */}
        <Grid item xs={12} md={3}>
          <Link to="/voice-overs" style={{ textDecoration: 'none' }}>
            <StyledCard>
              <GatsbyImage
                image={getImage(data.microphone)}
                alt="Microphone"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <StyledCardContent>
                <TitleTypography variant="h5" component="div">
                  Voice-Overs
                </TitleTypography>
              </StyledCardContent>
            </StyledCard>
          </Link>
        </Grid>

        {/* Demo Reel Card */}
        <Grid item xs={12} md={3}>
          <Link to="/demo-reel" style={{ textDecoration: 'none' }}>
            <StyledCard>
              <GatsbyImage
                image={getImage(data.demoReel)}
                alt="Demo Reel Placeholder"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <StyledCardContent>
                <TitleTypography variant="h5" component="div">
                  Demo Reel
                </TitleTypography>
              </StyledCardContent>
            </StyledCard>
          </Link>
        </Grid>

        {/* Headshots Card */}
        <Grid item xs={12} md={3}>
          <Link to="/photographs" style={{ textDecoration: 'none' }}>
            <StyledCard>
              <GatsbyImage
                image={getImage(data.headshot)}
                alt="Headshot"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <StyledCardContent>
                <TitleTypography variant="h5" component="div">
                  Headshots
                </TitleTypography>
              </StyledCardContent>
            </StyledCard>
          </Link>
        </Grid>

        {/* Resume Card */}
        <Grid item xs={12} md={3}>
          <Link to="/resume" style={{ textDecoration: 'none' }}>
            <StyledCard>
              <GatsbyImage
                image={getImage(data.resume)}
                alt="Resume"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <StyledCardContent>
                <TitleTypography variant="h5" component="div">
                  Resume
                </TitleTypography>
              </StyledCardContent>
            </StyledCard>
          </Link>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default HeroCards;