import React from 'react';
import Item from './Item';
import Welcome from './Welcome';
import UserCard from './UserCard';
import HooksDemo from './HooksDemo';

function App() {
  const name = "John Doe";
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React with JSX.</p>

      <Welcome />

      <h2>My Items:</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>

      <h2>User Cards:</h2>
      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />

      <HooksDemo />
    </div>
  );
}

export default App;