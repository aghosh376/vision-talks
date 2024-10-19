import React, {useState} from 'react';
import Card from '../components/Card';
import './Dict.css';
import '../assets/pictures'

function defCard() {
  
}


const DictPage: React.FC = () => {
    return (
      <div className="card-container">
        <Card letter="A" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDuNdz3Bi3Bs9issz4gpFsJa089KYY5YUww&s" />
        <Card letter="B" imageUrl="https://plus.unsplash.com/premium_photo-1666284030814-9ed7d565ccf5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFuZCUyMGdlc3R1cmVzfGVufDB8fDB8fHww" />
        {/* Add more FlipCards as needed */}
      </div>
    );
  };
  
  export default DictPage;