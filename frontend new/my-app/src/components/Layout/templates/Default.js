import React,  { useState, useCallback }  from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyle } from '../../../theme';
import Container from '../../Container';
import Header from '../../Header';
import E from './Default.style';
import { AuthContext } from '../../../context/auth-context';
import MainNav from '../../../pages/Navigation';
import { useAuth } from '../../../hooks/auth-hook'



const DefaultLayout = (props) => {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}
  >
    <E.Root>
      <GlobalStyle></GlobalStyle>
      <MainNav></MainNav>
      <Header header={props.header}/>
      <Container>
        <Outlet/>
      </Container>
    </E.Root>
    </AuthContext.Provider>

  )
}
export default DefaultLayout;