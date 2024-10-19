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
        
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card-inner">
                <div className="card-front">
                    <h2>{letter}</h2>
                </div>
                <div className="card-back">
                    <img src={imageUrl} alt={letter} />
                </div>
            </div>
        </div>
        
    );
};

export default Card;