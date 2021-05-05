import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';

export default function Image({ alt, src, layout }) {
  return <NextImage alt={alt} src={src} layout={layout} />;
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
