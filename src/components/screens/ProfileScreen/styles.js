import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const ProfileAvatar = styled.div`
  background-color: #333;
  border-radius: 50%;

  ${breakpointsMedia({
    xs: css`
      width: 77px;
      height: 77px;
      margin-right: 10px;
    `,
    md: css`
      width: 150px;
      height: 150px;
    `,
  })}
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  div:nth-child(2) {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;
