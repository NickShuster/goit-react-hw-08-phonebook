import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

function ContactsPage() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList />
      {/* Додайте інші елементи сторінки тут */}
    </div>
  );
}

export default ContactsPage;