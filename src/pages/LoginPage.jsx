import React from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h1>Land Info System</h1>
      <LoginForm />
    </div>
  );
}