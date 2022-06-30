import styled from 'styled-components';
import { toPx } from '../../helpers';

const Root = styled.div`
  width: 70%;
  padding:  ${(p) => toPx(p.theme.spacing * 2)} ;
  margin: 10px auto;
  color:#663399;
`;

const Ul = styled.ul`
  padding: ${(p) => toPx(p.theme.spacing * 1)} ;
`;


export default {
  Root,
  Ul,

};


