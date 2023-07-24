import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/constacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
