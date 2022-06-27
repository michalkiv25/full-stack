import styled from 'styled-components';
import { toPx } from '../../helpers';

const Root = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin:55px;
  border: 2px solid gray;
  box-shadow: 5px 10px #888888;
`;

const Button = styled.button`
    background-color:LightGray;
    border-radius: 25px;
    padding:0 15px;
    font-size:1.2rem;
    height: 45px;
    margin-top:25px;

`;

const Input = styled.input`
    padding:25px;
    width: calc(27% - 55px);
    margin: 15px;
`;

export default {
  Root,
  Button,
  Input
};








