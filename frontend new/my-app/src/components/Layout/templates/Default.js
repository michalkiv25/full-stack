import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../../theme';
import Container from '../../Container';
import Header from '../../Header';
import E from './Default.style';

const DefaultLayout = () => (
  <E.Root>
    <GlobalStyle></GlobalStyle>
    <Header/>
    <Container>
      <Outlet />
    </Container>
  </E.Root>
)

export default DefaultLayout;