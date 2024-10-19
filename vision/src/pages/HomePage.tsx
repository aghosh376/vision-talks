import React, { useState } from 'react';
import { Routes } from 'react-router-dom'; // Make sure you import Routes from react-router-dom
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import '../../src/App.css';

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Define the count state with type number

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vision Talks</h1>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default HomePage;
