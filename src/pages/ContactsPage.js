import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm'; // Імпортуємо компонент

function ContactsPage() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm /> {/* Додаємо компонент ContactForm */}
      <p>This is the Contacts Page.</p>
      {/* Додайте інші елементи сторінки тут */}
    </div>
  );
}

export default ContactsPage;