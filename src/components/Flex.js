import styled from 'styled-components';
import { color, background, margin, padding } from 'styled-system';
import flexbox from '@styled-system/flexbox';
import layout from '@styled-system/layout';
import typography from '@styled-system/typography';

export default styled.div`
  ${background}
  ${color}
  ${flexbox}
  ${layout}
  ${margin}
  ${padding}
  ${typography}
  display: flex;
`;
