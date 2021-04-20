import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';

export default function Image({ alt, width, height, src }) {
  return <NextImage alt={alt} width={width} height={height} src={src} />;
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
