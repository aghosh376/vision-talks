import React, { useState } from 'react';
import './Card.css';

interface CardProps {
    letter: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ letter, imageUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        
        <div className={`card ${isFlipped ? 'flipped' : ''}`} 
        onClick={handleClick}
        style={{ zIndex: isFlipped ? 1000 : 0 }}>
            <div className="card-inner">
                <div className="card-front">
                    <h2 style={{ fontSize: '55px' }}>{letter}</h2>
                </div>
                <div className="card-back">
                    <img src={imageUrl} alt={letter} />
                </div>
            </div>
        </div>
        
    );
};

export default Card;