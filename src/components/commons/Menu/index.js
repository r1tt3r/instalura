import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper } from './styles';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';

export default function Menu({ onClickRegister }) {
  const links = [
    {
      display: 'Home',
      link: '/',
    },
    {
      display: 'Perguntas frequentes',
      link: '/faq',
    },
    {
      display: 'Sobre',
      link: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((result) => (
          <li key={result.link}>
            <Text variant="smallestException" tag="a" href={result.link}>
              {result.display}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button variant="secondary.main" ghost href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onClickRegister}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onClickRegister: PropTypes.func.isRequired,
};
