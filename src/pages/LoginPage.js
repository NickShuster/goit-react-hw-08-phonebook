import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Додайте код для логіну користувача тут
    // Після успішного логіну перенаправте користувача на сторінку /contacts
    navigate('/contacts');
  };

  return (
    <div>
      <h2>Логін</h2>
      <form>
        <input
          type="email"
          placeholder="Електронна пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Увійти
        </button>
      </form>
    </div>
  );
}

export default LoginPage;