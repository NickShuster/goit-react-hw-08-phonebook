import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Додайте код для реєстрації користувача тут
    // Після успішної реєстрації перенаправте користувача на сторінку /login
    navigate('/login');
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      <form>
        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="button" onClick={handleRegister}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;