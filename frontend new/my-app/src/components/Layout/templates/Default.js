import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../../theme';
import Container from '../../Container';
import Header from '../../Header';
import E from './Default.style';

const DefaultLayout = () => {
const title= 'The site was built by Michaela Noam'

  return (
    <E.Root>
      <GlobalStyle></GlobalStyle>
      <Header header={title}/>
      <Container>
        <Outlet />
      </Container>
    </E.Root>
  )
}
export default DefaultLayout;