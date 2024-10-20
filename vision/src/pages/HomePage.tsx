import React, { useState } from 'react';
//import { Routes } from 'react-router-dom'; // Make sure you import Routes from react-router-dom
import linkedinLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
import '../../src/App.css';

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Define the count state with type number

  return (
    <>
      <div className='descriptor'>
        <a href="https://www.linkedin.com/in/amartya-raybo-ghosh/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} className="logo-react" alt="React logo" />
        </a>
        <a href="https://www.linkedin.com/in/eeshan-khullar/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} className="logo-react" alt="React logo" />
        </a>
        <a href="https://github.com/aghosh376/vision-talks" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
        <p className="read-the-docs">
          Click on the LinkedIn buttons to know about the developers and Githuh logo to explore this page's code!
        </p>
      </div>
      <div>
      <h1>Vision Talks</h1>
      <div>
      <p className="container">
          Vision Talks is a platform where you can learn American Sign Language (ASL) and English words. Click on the Spelling tab to learn the ASL alphabet and the Words tab to learn some basic English words.
        </p>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
