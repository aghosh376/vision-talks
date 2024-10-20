import React, {useState} from 'react';
import Card from '../components/Card';
import './Dict.css';



const cardData = [
    { letter: 'A', imageUrl: '/assets/pictures/A.png' },
    { letter: 'B', imageUrl: '/assets/pictures/B.png' },
    { letter: 'C', imageUrl: '/assets/pictures/C.png' },
    { letter: 'D', imageUrl: '/assets/pictures/D.png' },
    { letter: 'E', imageUrl: '/assets/pictures/E.png' },
    { letter: 'F', imageUrl: '/assets/pictures/F.png' },
    { letter: 'G', imageUrl: '/assets/pictures/G.png' },
    { letter: 'H', imageUrl: '/assets/pictures/H.png' },
    { letter: 'I', imageUrl: '/assets/pictures/I.png' },
    { letter: 'J', imageUrl: '/assets/pictures/J.png' },
    // Add more cards as needed
];

const DictPage: React.FC = () => {
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <Card key={index} letter={card.letter} imageUrl={card.imageUrl} />
            ))}
        </div>
    );
  };
  
  export default DictPage;