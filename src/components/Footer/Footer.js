import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Grid from '@mui/material/Grid';

// import SocialMediaIcons from '../SocialMediaIcons';
import { SectionFooter, Wrapper, SiteTitle, CopyWrightDiv } from './Footer.styled';

const Links = [
  <Link to="/#">Home</Link>,
  <Link to="/photographs">HeadShots & Photos</Link>,
  <Link to="/demo-reel">Demo-Reel</Link>,
  <Link to="/resume">Resume</Link>,
  <Link to="/reviews">Reviews</Link>,
  <Link to="/contact">Contact</Link>,
];

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      swanLogo: file(relativePath: { eq: "swanlogo2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, height: 100, layout: FIXED)
        }
      }
    }
  `);

  const logoImage = getImage(data.swanLogo);

  return (
    <SectionFooter>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Wrapper>
            <SiteTitle>{Links.map((link, index) => <ul key={`ID-${index}`}>{link}</ul>)}</SiteTitle>
          </Wrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* <SocialMediaIcons /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Wrapper>
            <GatsbyImage
              image={logoImage}
              alt="Swan Logo"
            />
          </Wrapper>
        </Grid>
      </Grid>
      <CopyWrightDiv>
        {' '}
        <span aria-label="Copyright" role="img"> ©️ </span>
        Copyright Eric Ryan Swanson {new Date().getFullYear()}
      </CopyWrightDiv>
    </SectionFooter>
  );
};

export default Footer;