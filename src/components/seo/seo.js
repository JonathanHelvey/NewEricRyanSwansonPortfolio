import React from 'react';
import PropTypes from 'prop-types';

const SEO = ({ title, description }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Add other meta tags as needed */}
  </>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SEO.defaultProps = {
  description: '',
};

export default SEO;
