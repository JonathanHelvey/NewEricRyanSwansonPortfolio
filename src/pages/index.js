import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Footer />
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <SEO title="Home" description="Actor Portfolio of Eric Swanson" />;
}
