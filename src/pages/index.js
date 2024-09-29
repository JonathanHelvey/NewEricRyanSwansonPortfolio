import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
);

export default IndexPage;

export const Head = () => <SEO title="Home" description="Actor Portfolio of Eric Swanson" />;
