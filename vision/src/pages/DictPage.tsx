//import React, {useState} from 'react';
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
    { letter: 'K', imageUrl: '/assets/pictures/K.png' },
    { letter: 'L', imageUrl: '/assets/pictures/L.png' },
    { letter: 'M', imageUrl: '/assets/pictures/M.png' },
    { letter: 'N', imageUrl: '/assets/pictures/N.png' },
    { letter: 'O', imageUrl: '/assets/pictures/O.png' },
    { letter: 'P', imageUrl: '/assets/pictures/P.png' },
    { letter: 'Q', imageUrl: '/assets/pictures/Q.png' },
    // Add more cards as needed
];

const DictPage: React.FC = () => {
    return (
        
        <body className="cards-container">
            {cardData.map((card, index) => (
                <Card key={index} letter={card.letter} imageUrl={card.imageUrl} />
            ))}
        </body>
    );
  };
  
  export default DictPage;