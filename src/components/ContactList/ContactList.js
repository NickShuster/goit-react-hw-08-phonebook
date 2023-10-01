import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items) || [];

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;