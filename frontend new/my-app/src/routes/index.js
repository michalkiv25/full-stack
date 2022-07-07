import React,{ lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NoMatch from '../pages/Nomatch';
import { Layout } from '../components';
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/login'));
const Table = lazy(() => import('../pages/Table'));
const AddRow = lazy(() => import('../pages/AddRow'));


const AppRoutes = () => (
  <Routes>
    <Route element={<Layout template="default" header="The site was built by Michaela Noam"/>}>
      <Route path="/" element={<Suspense fallback={<>...</>}><Home /></Suspense>} />
    </Route>
    <Route element={<Layout header='Register'/>}>
      <Route path="/register/add" element={<Suspense fallback={<>...</>}><Register/></Suspense>} />
    </Route>
    <Route element={<Layout header='Login'/>}>
      <Route path="/login/add" element={<Suspense fallback={<>...</>}><Login/></Suspense>} />
    </Route>
    <Route element={<Layout header="All the list-table"/>}>
      <Route path="/table" element={<Suspense fallback={<>...</>}><Table/></Suspense>} />
    </Route>
    <Route element={<Layout header="Add row-table"/>}>
      <Route path="/table/:id" element={<Suspense fallback={<>...</>}><AddRow/></Suspense>} />
    </Route>
    <Route element={<Layout template="empty" />}>
      <Route path="*" element={<NoMatch/>} />
    </Route>
  </Routes>

)

export default AppRoutes;