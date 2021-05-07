import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  margin-bottom: 20px;
`;

Wrapper.Header = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
`;

Wrapper.Mid = styled.div``;

Wrapper.Footer = styled.div`
  padding: 20px 30px;
  /* display: flex;
  align-items: center; */
`;

export const IconButton = styled.button`
  border: 0px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 200ms ease-in-out 0s;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.6;
  }
`;

export const ButtonPlus = styled.button`
  cursor: pointer;
  background: #f1f1f1;
  color: #88989e;
  border-radius: 12.7631px;
  border: 0;
  padding: 8px 20px;
  &:hover {
    opacity: 0.6;
  }
`;

export const iconHeartEmpty = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="#000"
  >
    <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
  </svg>
);

export const iconHeartFull = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="#FC1C1C"
  >
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
);

export const iconComment = (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.1221 15.3166C31.1275 17.423 30.6368 19.5009 29.6897 21.381C28.5668 23.6341 26.8405 25.5291 24.7042 26.8539C22.5679 28.1787 20.106 28.8809 17.5942 28.8819C15.4936 28.8873 13.4215 28.3952 11.5465 27.4455L2.47485 30.4778L5.49873 21.381C4.55167 19.5009 4.06089 17.423 4.06637 15.3166C4.06734 12.7978 4.7676 10.3291 6.08873 8.18688C7.40986 6.04468 9.29966 4.31362 11.5465 3.18759C13.4215 2.23791 15.4936 1.74577 17.5942 1.75127H18.39C21.7072 1.93478 24.8404 3.33882 27.1897 5.69455C29.5389 8.05028 30.9391 11.1922 31.1221 14.5186V15.3166Z"
      stroke="black"
      strokeWidth="3.19078"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const iconSend = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.2597 2.15527L23.1191 34.0736L16.7531 19.7104L2.42944 13.3267L34.2597 2.15527Z"
      stroke="black"
      strokeWidth="3.19078"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const iconFlag = (
  <svg
    width="26"
    height="33"
    viewBox="0 0 26 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.2543 30.4777L13.1137 22.4981L1.97314 30.4777V4.94305C1.97314 4.09653 2.3085 3.28467 2.90543 2.68609C3.50236 2.0875 4.31198 1.75122 5.15617 1.75122H21.0713C21.9155 1.75122 22.7251 2.0875 23.322 2.68609C23.9189 3.28467 24.2543 4.09653 24.2543 4.94305V30.4777Z"
      stroke="black"
      strokeWidth="3.19078"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const iconDots = (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.114 21.07c.879 0 1.591-.715 1.591-1.596 0-.882-.712-1.596-1.591-1.596s-1.591.714-1.591 1.596c0 .881.712 1.596 1.591 1.596zM30.255 21.07c.879 0 1.591-.715 1.591-1.596 0-.882-.712-1.596-1.591-1.596-.88 0-1.592.714-1.592 1.596 0 .881.713 1.596 1.592 1.596zM7.973 21.07c.88 0 1.592-.715 1.592-1.596 0-.882-.713-1.596-1.592-1.596-.879 0-1.591.714-1.591 1.596 0 .881.712 1.596 1.591 1.596z"
      stroke="#070C0E"
      strokeWidth="3.191"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
