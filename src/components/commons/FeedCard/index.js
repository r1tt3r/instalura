import React from 'react';
import PropTypes from 'prop-types';

import { authService } from '../../../services/auth/authService';
import Avatar from '../Avatar';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import { ImageContainer } from '../../screens/app/FeedScreen/styles';
import Image from '../Image';
import {
  Wrapper,
  IconButton,
  iconHeartEmpty,
  iconHeartFull,
  iconComment,
  iconSend,
  iconFlag,
  iconDots,
  ButtonPlus,
} from './styles';
import { likeService } from '../../../services/like/likeService';

const FeedCard = ({ post }) => {
  const [liked, setLiked] = React.useState(false);
  const [likeNumber, setLikeNumber] = React.useState(0);
  const [session, setSession] = React.useState({});

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

    // eslint-disable-next-line no-underscore-dangle
    await likeService.like({ id: post._id });
  }

  return (
    <Wrapper>
      <Wrapper.Header>
        <Avatar size="big" />

        <Text tag="div" variant="subTitle" marginLeft="15px">
          nic.cage
        </Text>

        <Box flexGrow="1" textAlign="right">
          <IconButton>{iconDots}</IconButton>
        </Box>
      </Wrapper.Header>

      <Wrapper.Mid>
        <ImageContainer
          className="imageContainer"
          marginBottom="15px"
          position="relative"
        >
          <Box />
          <Image
            filter={post.filter}
            src={post.photoUrl}
            alt={post.description}
            layout="fill"
          />
        </ImageContainer>
      </Wrapper.Mid>

      <Wrapper.Footer>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleClick}>
            {liked ? iconHeartFull : iconHeartEmpty}

            {likeNumber > 0 ? (
              <Text
                fontSize="20px"
                fontWeight="500"
                tag="div"
                marginLeft="10px"
              >
                {likeNumber}
              </Text>
            ) : null}
          </IconButton>
          <IconButton>{iconComment}</IconButton>
          <IconButton>{iconSend}</IconButton>
          <Box flexGrow="1" textAlign="right">
            <IconButton>{iconFlag}</IconButton>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" marginTop="20px">
          <Box display="flex" flexDirection="row-reverse">
            <Box marginLeft="-15px" display="inline">
              <Avatar size="small" />
            </Box>
            <Box marginLeft="-15px" display="inline">
              <Avatar size="small" />
            </Box>
            <Box marginLeft="-15px" display="inline">
              <Avatar size="small" />
            </Box>
          </Box>
          <Box>
            <Text marginLeft="15px">{post.description}</Text>
          </Box>
          <Box flexGrow="1" textAlign="right">
            <ButtonPlus>
              <Text variant="paragraph2">Mais</Text>
            </ButtonPlus>
          </Box>
        </Box>
      </Wrapper.Footer>
    </Wrapper>
  );
};

export default FeedCard;

FeedCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
};
