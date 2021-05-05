import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const HeaderMobile = styled.div``;

export const MenuWrapper = styled.nav`
  display: flex;
  background-color: white;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  border-bottom: 1px solid #d5d5d5;

  ${breakpointsMedia({
    xs: css`
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 24px 24px 0px 0px;
      z-index: 10;
    `,
    md: css`
      position: unset;
      padding: 28px;
      border-radius: 0;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 12px;

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.smallestException}
      `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.colors.modes[theme.mode].background.light.color};
`;

MenuWrapper.LeftSide = styled.div`
  ${breakpointsMedia({
    xs: css`
      svg {
        display: none;
      }
    `,
    md: css`
      svg {
        display: block;
      }
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  align-items: center;

  svg:nth-of-type(2) {
    order: -1;
  }

  svg:nth-of-type(1) {
    margin: 0 26px;
  }

  svg:nth-of-type(3) {
    margin: 0 26px;
  }

  ${breakpointsMedia({
    md: css`
      svg:nth-of-type(2) {
        order: 0;
        margin-left: 26px;
      }
    `,
  })}

  svg {
    ${breakpointsMedia({
      xs: css`
        width: 24px;
        height: 24px;
      `,

      md: css`
        width: 32px;
        height: 32px;
      `,
    })}

    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary.main.color};
    }
  }
`;

export const Avatar = styled.div`
  ${breakpointsMedia({
    xs: css`
      width: 24px;
      height: 24px;
    `,

    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  background-color: #333;
  border-radius: 50%;
`;

export const ButtonModal = styled.button`
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      width: 40px;
      height: 40px;
      font-size: 28px;
    `,

    md: css`
      width: 32px;
      height: 32px;
    `,
  })}

  border: 0;
  color: #fff;
  transition: opacity 0.2s;
  box-shadow: 0px 0px 12px rgba(251, 123, 107, 0.3);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
`;
