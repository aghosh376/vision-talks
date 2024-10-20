import React, {useState} from 'react';
import Card from '../components/Card';
import './Dict.css';

const cardData = [
    { letter: 'A', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDuNdz3Bi3Bs9issz4gpFsJa089KYY5YUww&s' },
    { letter: 'B', imageUrl: 'https://plus.unsplash.com/premium_photo-1666284030814-9ed7d565ccf5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFuZCUyMGdlc3R1cmVzfGVufDB8fDB8fHww' },
    { letter: 'C', imageUrl: '../picture/imageC.jpg' },
    { letter: 'D', imageUrl: '../picture/imageD.jpg' },
    { letter: 'C', imageUrl: '../picture/imageC.jpg' },
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