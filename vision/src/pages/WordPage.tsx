//import React, {useState} from 'react';
import Card from '../components/Card';
import './Word.css';

const wordCardData = [
    { letter: 'Words', imageUrl: '/assets/pictures/A.png' },
    { letter: 'Word 2', imageUrl: '/assets/pictures/B.png' },
    { letter: 'Word 3', imageUrl: '/assets/pictures/C.png' },
    { letter: 'Word 4', imageUrl: '/assets/pictures/C.png' },

    // Add more cards as needed
];

const WordPage: React.FC = () => {
    return (        
        <body className="cards-container">
            {wordCardData.map((card, index) => (
                <Card key={index} letter={card.letter} imageUrl={card.imageUrl} />
            ))}
        </body>
    );
  };
  
  export default WordPage;