import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useRouter } from 'next/router';
import { FiHome, FiHeart, FiSearch } from 'react-icons/fi';
import { MenuWrapper, ButtonModal } from './styles';
import { Logo } from '../../../theme/Logo';
import { Grid } from '../../foundation/layout/Grid';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';
import Avatar from '../Avatar';
import { IconButton } from '../FeedCard/styles';

export default function MenuLoggedArea() {
  const websitePageContext = React.useContext(WebsitePageContext);
  const router = useRouter();

  return (
    <MenuWrapper>
      <ReactTooltip />
      <Grid.Container>
        <Grid.Row justifyContent={{ md: 'space-between', xs: 'center' }}>
          <MenuWrapper.LeftSide>
            <Logo />
          </MenuWrapper.LeftSide>

          <MenuWrapper.RightSide>
            <FiSearch />

            <ButtonModal
              type="button"
              variant="primary.main"
              borderRadius="50%"
              padding="0"
              onClick={() => websitePageContext.toggleModal()}
            >
              +
            </ButtonModal>

            <FiHome onClick={() => router.push('/app/feed')} />

            <FiHeart />
            <IconButton
              onClick={() => router.push('/app/profile')}
              data-tip="Acesse seu profile :)"
              data-background-color="black"
            >
              <Avatar size="small" />
            </IconButton>
          </MenuWrapper.RightSide>
        </Grid.Row>
      </Grid.Container>
    </MenuWrapper>
  );
}
