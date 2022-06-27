import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../../theme';

const Empty = () => (
  <>
    <GlobalStyle/>
    <Outlet />
  </>
)

export default Empty;
