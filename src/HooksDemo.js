import React, { useState, useEffect } from 'react';

function HooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // useEffect - runs every time count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]);

  // useEffect - runs once on mount
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return (
    <div style={{ padding: '1rem', background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333' }}>
      <h2>React Hooks Demo</h2>

      <h3>useState — Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h3>useState — Input</h3>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <p>Hello, {name}!</p>}

      <h3>useState — Toggle</h3>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h3>useEffect</h3>
      <p>Check browser tab title and console (F12) to see useEffect in action.</p>
    </div>
  );
}

export default HooksDemo;