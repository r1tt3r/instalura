/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import { SEO } from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
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
};