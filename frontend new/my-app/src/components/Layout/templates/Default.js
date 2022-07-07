import React,  { useState, useCallback }  from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyle } from '../../../theme';
import Container from '../../Container';
import Header from '../../Header';
import E from './Default.style';
import { AuthContext } from '../../../context/auth-context';
import MainNav from '../../../pages/Navigation';



const DefaultLayout = (props) => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userId, setUserId] = useState(false);


const login = useCallback(uid => {
  setIsLoggedIn(true);
  setUserId(uid);
}, []);

const logout = useCallback(() => {
  setIsLoggedIn(false);
  setUserId(null);
}, []);

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
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