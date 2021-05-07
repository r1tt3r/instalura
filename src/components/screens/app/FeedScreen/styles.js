import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

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

export const iconGithub = (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 21.9999V18.1299C15.0375 17.6531 14.9731 17.1737 14.811 16.7237C14.6489 16.2737 14.3929 15.8634 14.06 15.5199C17.2 15.1699 20.5 13.9799 20.5 8.51994C20.4997 7.12376 19.9627 5.78114 19 4.76994C19.4559 3.54844 19.4236 2.19829 18.91 0.999938C18.91 0.999938 17.73 0.649938 15 2.47994C12.708 1.85876 10.292 1.85876 8 2.47994C5.27 0.649938 4.09 0.999938 4.09 0.999938C3.57638 2.19829 3.54414 3.54844 4 4.76994C3.03013 5.78864 2.49252 7.1434 2.5 8.54994C2.5 13.9699 5.8 15.1599 8.94 15.5499C8.611 15.8899 8.35726 16.2953 8.19531 16.7399C8.03335 17.1844 7.96681 17.658 8 18.1299V21.9999M8 18.9999C3 20.4999 3 16.4999 1 15.9999L8 18.9999Z"
      stroke="#FB7B6B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
