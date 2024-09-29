import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import Header from '../components/header';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <SEO title="Home" description="Actor Portfolio of Eric Swanson" />;
}
