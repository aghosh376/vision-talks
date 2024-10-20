//import React, {useState} from 'react';
import Card from '../components/Card';
import './Word.css';

const wordCardData = [
    { letter: 'Eat', imageUrl: '/assets/pictures/Eat.png' },
    { letter: 'More', imageUrl: '/assets/pictures/More.png' },
    { letter: 'Hurt', imageUrl: '/assets/pictures/Hurt.png' },
    { letter: 'Tired', imageUrl: '/assets/pictures/tired.gif' },

    // https://www.printablee.com/postpic/2013/07/basic-baby-sign-language-words-chart_392258.jpg
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