import React,{ lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NoMatch from '../pages/Nomatch';
import { Layout } from '../components';
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/login'));
const Table = lazy(() => import('../pages/Table'));




const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
    </Route>
    <Route element={<Layout/>}>
      <Route path="/register/add" element={<Suspense fallback={<>...</>}><Register/></Suspense>} />
    </Route>
    <Route element={<Layout/>}>
      <Route path="/login/add" element={<Suspense fallback={<>...</>}><Login/></Suspense>} />
    </Route>
    <Route element={<Layout/>}>
      <Route path="/table" element={<Suspense fallback={<>...</>}><Table/></Suspense>} />
    </Route>
    <Route element={<Layout template="empty" />}>
      <Route path="*" element={<NoMatch/>} />
    </Route>
  </Routes>

)

export default AppRoutes;