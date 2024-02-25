import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../components/HomePage/HomePage';
// import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { current } from '../redux/auth/operations';
import './App.css';
import RestrictedRoute from './RestrictedRoute';

import PrivateRoute from './PrivateRoute';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';

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
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>

          <Route element={<PrivateRoute />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
