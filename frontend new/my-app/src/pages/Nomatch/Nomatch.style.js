import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.primary[500]};
  color: #fff;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 10rem;
    line-height: 1;
  }

  h2 {
    padding: 0;
    margin: 0;
    font-weight: 300;
    font-size: 3rem;
    line-height: 1;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
    font-weight: 300;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default {
  Root,
  Info,
};
