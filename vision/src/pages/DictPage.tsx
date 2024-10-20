import React, {useState} from 'react';
import Card from '../components/Card';
import './Dict.css';



const cardData = [
    { letter: 'A', imageUrl: '/assets/pictures/A.png' },
    { letter: 'B', imageUrl: '/assets/pictures/B.png' },
    { letter: 'C', imageUrl: '/assets/pictures/C.png' },
    { letter: 'D', imageUrl: '/assets/pictures/D.png' },
    { letter: 'E', imageUrl: '/assets/pictures/E.png' },
    { letter: 'D', imageUrl: '../picture/imageD.jpg' },
    { letter: 'C', imageUrl: '../picture/imageC.jpg' },
    { letter: 'D', imageUrl: '../picture/imageD.jpg' },
    { letter: 'C', imageUrl: '../picture/imageC.jpg' },
    { letter: 'D', imageUrl: '../picture/imageD.jpg' },
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