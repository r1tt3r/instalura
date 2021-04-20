/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import FormPhotoUpload from '../../patterns/FormPhotoUpload';
import { SEO } from '../../commons/SEO';
import { WebsitePageContext } from './context';
import MenuLoggedArea from '../../commons/MenuLoggedArea';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
  layoutProps,
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  if (layoutProps?.loggedIn) {
    return (
      <WebsitePageContext.Provider
        value={{
          toggleModal: () => {
            setIsModalOpen(!isModalOpen);
          },
        }}
      >
        <SEO {...seoProps} />
        <Box
          flex="1"
          display="flex"
          flexWrap="wrap"
          backgroundColor="#E5E5E5"
          flexDirection="column"
          {...pageBoxProps}
        >
          <MenuLoggedArea />
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {(modalProps) => <FormPhotoUpload modalProps={modalProps} />}
          </Modal>
          {children}
        </Box>
      </WebsitePageContext.Provider>
    );
  }

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModal: () => {
          setIsModalOpen(!isModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >
      <SEO {...seoProps} />

      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {(modalProps) => <FormCadastro modalProps={modalProps} />}
        </Modal>

        {menuProps.display && (
          <Menu
            onClickRegister={() => {
              setIsModalOpen(!isModalOpen);
            }}
          />
        )}

        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  messages: {},
  layoutProps: {
    layoutProps: false,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  messages: PropTypes.object,
  layoutProps: PropTypes.object,
};
