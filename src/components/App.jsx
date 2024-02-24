import { Routes, Route } from 'react-router-dom';
// import Phonebook from './Phonebook/Phonebook';
// import ContactList from './ContactList/ContactList';
// import SearchBox from './SearchBox/SearchBox';
// import ContactForm from './ContactForm/ContactForm';
import Layout from './Layout';
import HomePage from '../components/HomePage/HomePage';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectContacts,
//   selectIsLoading,
//   selectError,
// } from '../redux/contacts/selectors';

import './App.css';
import RestrictedRoute from './RestrictedRoute';
// import LoginPage from './LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';

export const App = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
