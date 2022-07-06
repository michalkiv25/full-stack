import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// import from project
import './App.css';
import theme from './theme';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
