import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ParcelList from '../components/ParcelList';

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <h2>Welcome, {user.role}</h2>
        <button onClick={logout}>Logout</button>
      </header>
      <main style={{ padding: '1rem' }}>
        <ParcelList />
      </main>
    </div>
  );
}

