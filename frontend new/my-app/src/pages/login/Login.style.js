import styled from 'styled-components';
import { toPx } from '../../helpers';

const Root = styled.form`
    border: 2px solid #F8F8FF;
    padding:${(p) => toPx(p.theme.spacing * 2.5)};
`;

export default {
  Root,
};





