import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      onClick={(event) => {
        const safeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!safeArea) {
          onClose();
        }
      }}
      isOpen={isOpen}
    >
      <motion.div
        variants={{
          open: {
            x: 'calc(100% - 100px)',
          },
          closed: {
            x: '101%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: '0.6',
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({ 'data-modal-safe-area': 'true' })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
