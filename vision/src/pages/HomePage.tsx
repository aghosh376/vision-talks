import React, { useState } from 'react';
//import { Routes } from 'react-router-dom'; // Make sure you import Routes from react-router-dom
import reactLogo from '../assets/react.svg';
import githubLogo from '/github.svg';
import '../../src/App.css';

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Define the count state with type number

  return (
    <>
      <div>
        <a href="https://github.com/aghosh376/vision-talks" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/amartya-raybo-ghosh/" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vision Talks</h1>
      <div className="container">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        </p>
      </div>
      
    </>
  );
};

export default HomePage;
