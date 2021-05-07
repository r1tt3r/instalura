import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';

export default function Image({ alt, src, layout, filter }) {
  return <NextImage className={filter} alt={alt} src={src} layout={layout} />;
}

Image.defaultProps = {
  filter: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  filter: PropTypes.string,
};
