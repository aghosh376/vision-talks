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
    { letter: 'R', imageUrl: '/assets/pictures/R.png' },
    { letter: 'S', imageUrl: '/assets/pictures/S.png' },
    { letter: 'T', imageUrl: '/assets/pictures/T.png' },
    { letter: 'U', imageUrl: '/assets/pictures/U.png' },
    { letter: 'V', imageUrl: '/assets/pictures/V.png' },
    { letter: 'W', imageUrl: '/assets/pictures/W.png' },
    { letter: 'X', imageUrl: '/assets/pictures/X.png' },
    { letter: 'Y', imageUrl: '/assets/pictures/Y.png' },
    { letter: 'Z', imageUrl: '/assets/pictures/Z.png' },
    { letter: '0', imageUrl: '/assets/pictures/0.png' },
    { letter: '1', imageUrl: '/assets/pictures/1.png' },
    { letter: '2', imageUrl: '/assets/pictures/2.png' },
    { letter: '3', imageUrl: '/assets/pictures/3.png' },
    { letter: '4', imageUrl: '/assets/pictures/4.png' },
    { letter: '5', imageUrl: '/assets/pictures/5.png' },
    { letter: '6', imageUrl: '/assets/pictures/6.png' },
    { letter: '7', imageUrl: '/assets/pictures/7.png' },
    { letter: '8', imageUrl: '/assets/pictures/8.png' },
    { letter: '9', imageUrl: '/assets/pictures/9.png' },
    { letter: '10', imageUrl: '/assets/pictures/10.png' },
    { letter: '100', imageUrl: '/assets/pictures/100.png' },
    { letter: '1000', imageUrl: '/assets/pictures/1000.png' },
    
    // Add more cards as needed
    // www.startasl.com/
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