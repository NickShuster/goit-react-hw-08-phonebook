import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/contacts">Контакти</Link>
        </li>
        <li>
          <Link to="/login">Логін</Link>
        </li>
        <li>
          <Link to="/register">Реєстрація</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;