import React, { useEffect, useRef, useState } from 'react';
import './dvd-logo-styles.css'; // Import the CSS file

console.log("dvdLogo.js Loaded"); // Debugging

function DvdLogo() {
  const logoRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ dx: 5, dy: 5 });
  const [color, setColor] = useState(0);
  
  useEffect(() => {
    const animateLogo = () => {
      if (!logoRef.current) return;
      
      const logo = logoRef.current;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const logoWidth = logo.offsetWidth;
      const logoHeight = logo.offsetHeight;
      
      let newX = position.x + velocity.dx;
      let newY = position.y + velocity.dy;
      let newDx = velocity.dx;
      let newDy = velocity.dy;
      let shouldChangeColor = false;
      
      if (newX + logoWidth > windowWidth) {
        newX = windowWidth - logoWidth;
        newDx = -velocity.dx;
        shouldChangeColor = true;
      }
      if (newX < 0) {
        newX = 0;
        newDx = -velocity.dx;
        shouldChangeColor = true;
      }
      if (newY + logoHeight > windowHeight) {
        newY = windowHeight - logoHeight;
        newDy = -velocity.dy;
        shouldChangeColor = true;
      }
      if (newY < 0) {
        newY = 0;
        newDy = -velocity.dy;
        shouldChangeColor = true;
      }
      
      setPosition({ x: newX, y: newY });
      setVelocity({ dx: newDx, dy: newDy });
      
      if (shouldChangeColor) {
        setColor(Math.random() * 360);
      }
      
      requestAnimationFrame(animateLogo);
    };
    
    const animationId = requestAnimationFrame(animateLogo);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [position, velocity]);
  
  // Using className instead of inline styles to leverage the CSS file
  return (
    <div className="dvd-container">
      <div
        id="dvd-logo"
        ref={logoRef}
        className="dvd-logo"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          filter: `hue-rotate(${color}deg)`
        }}
      />
    </div>
  );
}

export default DvdLogo;