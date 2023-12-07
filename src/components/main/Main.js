import React, { useEffect, useState } from 'react';
import './main.css'; // Import your CSS file

const Main = () => {
  const nameValue = 'NETFLIX'; // Replace 'CORONA' with the actual name
  const [characters, setCharacters] = useState([]);

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
  };

  const animate = () => {
    const updatedCharacters = [...nameValue].map((x, i) => insert(x, i, nameValue.length));
    setCharacters(updatedCharacters);

    setTimeout(() => {
      // Apply your styles and animations here
      // You may want to use React state to manage animations
      // and styles instead of directly manipulating the DOM
      // For example, use state to toggle classes that trigger animations
      const name = document.querySelector(".name");
      name.style.animation = "shrink 4s ease-out forwards";
      const characterElements = document.querySelectorAll(".character");
      characterElements.forEach(c => {
        c.style.color = "red";
      });
    }, 1000);

    setTimeout(() => {
      // Reset the name element and trigger grow animation
      const name = document.querySelector(".name");
      name.innerHTML = "";
      name.style.animation = "grow 1s ease forwards";
    }, 4000);
  };

  useEffect(() => {
    animate();

    const intervalId = setInterval(animate, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  return <div className="name">{characters}</div>;
};

export default Main;
