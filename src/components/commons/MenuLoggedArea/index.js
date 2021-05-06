import React from 'react';
import { FiHome, FiHeart, FiSearch } from 'react-icons/fi';
import { MenuWrapper, ButtonModal, Avatar } from './styles';
import { Logo } from '../../../theme/Logo';
import { Grid } from '../../foundation/layout/Grid';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

export default function MenuLoggedArea() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <MenuWrapper>
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

            <FiHome />
            <FiHeart />
            <Avatar />
          </MenuWrapper.RightSide>
        </Grid.Row>
      </Grid.Container>
    </MenuWrapper>
  );
}
