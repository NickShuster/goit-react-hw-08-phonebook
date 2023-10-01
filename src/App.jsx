import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './pages/Navigation';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.user !== null);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/contacts" element={isAuthenticated ? <ContactsPage /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/contacts" replace />} />
          <Route path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/contacts" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;