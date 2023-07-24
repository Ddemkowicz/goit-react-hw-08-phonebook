// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import PropTypes from 'prop-types';
import React from 'react';
import LimitedRoute from 'LimitedRoute';
import ContactsRoute from 'ContactsRoute';
// import { useSelector } from 'react-redux';
// import { selectIsLoading, selectError } from 'redux/constacts/selectors';

const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const HomePage = lazy(() => import('../pages/Home'));
  const LoginPage = lazy(() => import('../pages/Login'));
  const RegisterPage = lazy(() => import('../pages/Register'));
  const ContactsPage = lazy(() => import('../pages/Contacts'));

  return (
    <Routes>
      <Route path="goit-react-hw-08-phonebook/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <ContactsRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="register"
          element={
            <ContactsRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <LimitedRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  values: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  filteredContacts: PropTypes.array,
};

export default App;

// <div
//     style={{
//       backgroundColor: 'rgb(148, 148, 148)',
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//     }}
//   >
//     <ContactForm />
//     <Filter />
//     {isLoading && !error && <b>Request in progress...</b>}
//     <ContactList />
//   </div>
