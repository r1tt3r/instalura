import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import { likeService } from '../../../services/like/likeService';
import { Box } from '../../foundation/layout/Box';
import { authService } from '../../../services/auth/authService';
import likeAnimation from './animations/multilikes.json';

const PhotoWrapper = styled.div`
  opacity: 0;
  cursor: pointer;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`;

const Cempty = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="#FC1C1C"
  >
    <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
  </svg>
);

const Cfull = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="#FC1C1C"
  >
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
);

export default function PhotoLike({ post }) {
  const [liked, setLiked] = React.useState(false);
  const [likeNumber, setLikeNumber] = React.useState(0);
  const [session, setSession] = React.useState({});
  const [playingState, setPlayingState] = React.useState('stopped');

  async function handleSession() {
    setSession(await authService().getSession());
  }

  React.useEffect(() => {
    handleSession();

    if (post.likes[0]) {
      const isLiked = post.likes.filter((obj) => obj.user === session.id);

      if (isLiked) {
        setLiked(true);
      }

      setLikeNumber(post.likes.length);
    }
  }, []);

  async function handleClick() {
    setLiked(!liked);

    const updateLike = liked ? likeNumber - 1 : likeNumber + 1;
    setLikeNumber(updateLike);
    setPlayingState('playing');

    // eslint-disable-next-line no-underscore-dangle
    await likeService.like({ id: post._id });
  }

  return (
    <PhotoWrapper onClick={handleClick}>
      <Box>
        {liked ? (
          <>
            <Lottie
              playingState={playingState}
              style={{ position: 'absolute', top: '0', left: '0' }}
              config={{
                animationData: likeAnimation,
                loop: false,
                autoplay: true,
              }}
            />
            {Cfull}
          </>
        ) : (
          Cempty
        )}
      </Box>
      <Box>{likeNumber}</Box>
    </PhotoWrapper>
  );
}

PhotoLike.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
};
