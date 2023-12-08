import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

function Main() {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const handleAnimationEnd = () => {
     
      setAnimationComplete(true);
    };

    
    const txtElement = document.querySelector('.txt');
    txtElement.addEventListener('animationend', handleAnimationEnd);

   
    return () => {
      txtElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

 
  useEffect(() => {
    if (animationComplete) {
      
      navigate('/secondpage'); 
    }
  }, [animationComplete, navigate]);

  return (
    <div className="background-container">
      <div className="txt" contentEditable={true}>
        N  E  T  F L I X
      </div>
    </div>
  );
}

export default Main;

