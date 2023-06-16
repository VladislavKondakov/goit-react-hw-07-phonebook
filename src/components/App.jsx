import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'reduce/operation';

import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      dispatch(fetchContacts(parsedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <AddContactForm />
      <ContactList />
    </div>
  );
};

export default App;
