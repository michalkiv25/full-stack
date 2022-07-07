import styled from 'styled-components';

import { toPx } from '../../helpers';

const Root = styled.div`
  width: 100%;
  padding:  ${(p) => toPx(p.theme.spacing * 1)};
  margin: 20px auto;

  @media (min-width: ${(p) => toPx(p.theme.breakpoints.sm)}) {
    max-width: calc(${(p) => toPx(p.theme.breakpoints.sm)} - 3rem);
  }

  @media (min-width: ${(p) => toPx(p.theme.breakpoints.md)}) {
    max-width: calc(${(p) => toPx(p.theme.breakpoints.md)} - 4rem);
  }

  @media (min-width: ${(p) => toPx(p.theme.breakpoints.lg)}) {
    max-width: calc(${(p) => toPx(p.theme.breakpoints.lg)} - 6rem);
  }

  @media (min-width: ${(p) => toPx(p.theme.breakpoints.xl)}) {
    max-width: 1100px;
  }
`;

export default {
  Root,
};





