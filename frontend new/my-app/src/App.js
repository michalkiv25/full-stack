import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import AppRoutes from './routes';
// import from project
import './App.css';
import Navbar from './pages/Navbar';

function App() {
  return (
    <ThemeProvider  theme={theme}>
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRoutes/>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
