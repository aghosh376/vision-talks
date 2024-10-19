import React, {useState} from 'react';
import Card from '../components/Card';
import '../assets/pictures'

const DictPage: React.FC = () => {
    return (
      <div className="card-container">
        <Card letter="same" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDuNdz3Bi3Bs9issz4gpFsJa089KYY5YUww&s" />
        {/* Add more FlipCards as needed */}
      </div>
    );
  };
  
  export default DictPage;