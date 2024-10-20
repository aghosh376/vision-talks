//import React, {useState} from 'react';
import Card from '../components/Card';
import './Word.css';

const wordCardData = [
    { letter: 'Eat', imageUrl: '/assets/pictures/eat.png' },
    { letter: 'More', imageUrl: '/assets/pictures/More.png' },
    { letter: 'Word 3', imageUrl: '/assets/pictures/C.png' },
    { letter: 'Word 4', imageUrl: '/assets/pictures/C.png' },

    // https://printable.conaresvirtual.edu.sv/en/words-in-sign-language-printables.html
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