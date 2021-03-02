import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { css, createGlobalStyle } from 'styled-components';

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

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function ButtonCloseModal({ onClose }) {
  return (
    <div
      aria-hidden="true"
      onClick={() => onClose()}
      onKeyDown={() => onClose()}
    >
      <svg
        height="20px"
        viewBox="0 0 376.49067 376.49067"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m316.457031 376.46875c-9.554687 0-19.132812-3.648438-26.429687-10.921875l-101.78125-101.761719-101.761719 101.761719c-14.613281 14.589844-38.3125 14.589844-52.90625 0l-22.632813-22.636719c-14.59375-14.589844-14.59375-38.3125 0-52.90625l101.757813-101.757812-101.757813-101.761719c-14.59375-14.613281-14.59375-38.335937 0-52.90625l22.632813-22.632813c14.570313-14.570312 38.292969-14.59375 52.886719 0l101.78125 101.757813 101.757812-101.757813c14.636719-14.59375 38.335938-14.59375 52.90625 0l22.636719 22.632813c14.589844 14.59375 14.589844 38.316406 0 52.90625l-101.761719 101.761719 101.761719 101.757812c14.589844 14.59375 14.589844 38.316406 0 52.90625l-22.636719 22.636719c-7.292968 7.273437-16.871094 10.921875-26.453125 10.921875zm-128.210937-151.316406c4.246094 0 8.320312 1.683594 11.304687 4.691406l113.066407 113.066406c2.09375 2.070313 5.589843 2.070313 7.660156 0l22.632812-22.632812c2.09375-2.070313 2.070313-5.589844 0-7.679688l-113.066406-113.046875c-6.25-6.25-6.25-16.382812 0-22.632812l113.066406-113.066407c2.070313-2.070312 2.09375-5.589843 0-7.660156l-22.632812-22.613281c-2.089844-2.070313-5.566406-2.070313-7.679688 0l-113.046875 113.066406c-5.992187 5.996094-16.617187 5.996094-22.632812 0l-113.066407-113.066406c-2.089843-2.070313-5.589843-2.070313-7.660156 0l-22.613281 22.636719c-2.089844 2.066406-2.070313 5.585937 0 7.679687l113.066406 113.042969c6.25 6.25 6.25 16.386719 0 22.636719l-113.066406 113.066406c-2.070313 2.070313-2.089844 5.589844 0 7.65625l22.636719 22.636719c2.089844 2.070312 5.566406 2.070312 7.679687 0l113.042969-113.066406c2.988281-3.03125 7.0625-4.714844 11.308594-4.714844zm0 0" />
      </svg>
    </div>
  );
}

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
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            x: '0',
          },
          closed: {
            x: '100%',
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
        {children({
          'data-modal-safe-area': 'true',
          ButtonCloseModal: <ButtonCloseModal onClose={onClose} />,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

ButtonCloseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
