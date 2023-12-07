import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './main.css';

const Main = () => {
  const nameValue = 'NETFLIX';
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const insert = (x, i, t) => {
    let s = 0;
    let ss = 1;
    if (i === 0) {
      s = 20;
      ss = 1.15;
    } else if (i === 1) {
      s = 15;
      ss = 1.1;
    } else if (i === 2) {
      s = 5;
      ss = 1.03;
    } else if (i === 3) {
      s = 0;
      ss = 1;
    } else if (i === 4) {
      s = -5;
      ss = 1.03;
    } else if (i === 5) {
      s = -15;
      ss = 1.1;
    } else if (i === 6) {
      s = -20;
      ss = 1.15;
    }

    return (
      <div className="container" key={i} style={{ animation: `zoom 1.5s ${i / 20}s cubic-bezier(.23,1.62,.65,.87) forwards` }}>
        <div className="character" style={{ transform: `rotateY(${s}deg) scale(${ss})`, animation: `long-shadow 1.5s ${i / 20}s cubic-bezier(.23,1.62,.65,.87) forwards` }}>
          {x}
        </div>
      </div>
    );
    // (same as before) ...
  };

  const animate = () => {
    const updatedCharacters = [...nameValue].map((x, i) => insert(x, i, nameValue.length));
    setCharacters(updatedCharacters);

    setTimeout(() => {
      const name = document.querySelector(".name");
      name.style.animation = "shrink 4s ease-out forwards";
      const characterElements = document.querySelectorAll(".character");
      characterElements.forEach(c => {
        c.style.color = "red";
      });
    }, 1000);

    setTimeout(() => {
      const name = document.querySelector(".name");
      name.innerHTML = "";
      name.style.animation = "grow 1s ease forwards";

      setTimeout(() => {
        navigate(''); // Use navigate instead of history.push
      }, 1000);
    }, 4000);
  };

  useEffect(() => {
    animate();

    const intervalId = setInterval(animate, 5000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return <div className="name">{characters}</div>;
};

export default Main;
