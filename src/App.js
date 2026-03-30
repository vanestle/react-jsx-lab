import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import Footer from './components/Footer';

const users = [
  { name: 'Vanessa', email: 'vanessa@gmail.com', role: 'Frontend Dev' },
  { name: 'Budi', email: 'budi@gmail.com', role: 'Backend Dev' },
  { name: 'Citra', email: 'citra@gmail.com', role: 'UI Designer' },
  { name: 'Dani', email: 'dani@gmail.com', role: 'Full Stack Dev' },
];

function App() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <Header
        title="Component Hierarchy Lab"
        subtitle="Building reusable UI components in React"
      />
      <UserList users={users} />
      <Footer />
    </div>
  );
}

export default App;