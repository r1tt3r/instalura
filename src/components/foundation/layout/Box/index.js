import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('position')}
  ${propToStyle('left')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingBottom')}
  ${propToStyle('margin')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('minHeight')}
  ${propToStyle('textAlign')}
  ${propToStyle('flexGrow')}
  ${propToStyle('overflow')}
  ${propToStyle('cursor')}
`;
