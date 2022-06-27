import styled from 'styled-components';
import { toPx } from '../../helpers';


const Root = styled.button`
    margin-bottom:${(p) => toPx(50)};
    background-color:LightGray;
    font-size:1.5rem;
    padding:10px;
    border-radius: 25px;
`;

export default {
  Root,
};
