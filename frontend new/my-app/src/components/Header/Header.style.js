import styled from 'styled-components';
import { toPx } from '../../helpers';


const Root = styled.div`
  display: flex;
  justify-content: center;
  padding:  ${(p) => toPx(p.theme.spacing * 1)} ${(p) => toPx(p.theme.spacing * 1)};
  height: ${props => props.sizeHeder || "100px" };
  align-items: center;
  width: 100%;
  background: ${props => props.headerBackground || "#FFFFFF" };
  color: ${props => props.headerColor || "#663399"};
  text-shadow: 2px 1px ${props => props.headerColor || "#663399"};
  margin-top: ${props => props.headerEdit  || "60px"};
`;

export default {
  Root,
};
