import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const PhotoAvatar = styled.div`
  ${breakpointsMedia({
    xs: css`
      width: 35px;
      height: 35px;
    `,

    md: css`
      width: ${({ size }) => (size === 'small' ? '35px' : '50px')};
      height: ${({ size }) => (size === 'small' ? '35px' : '50px')};
    `,
  })}
  background-color: #333;
  border-radius: 50%;
  display: inline-block;
  border: ${({ border }) => border && '3px solid #fff'};
`;

const Avatar = ({ size, border }) => (
  <PhotoAvatar size={size} border={border} />
);

export default Avatar;

Avatar.defaultProps = {
  border: true,
};

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  border: PropTypes.bool,
};
