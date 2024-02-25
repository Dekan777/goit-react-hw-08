import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/operations';
import './App.css';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/Home'));
const RegisterForm = lazy(() => import('../pages/Register'));
const ContactForm = lazy(() => import('../pages/Contacs'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route element={<RestrictedRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
