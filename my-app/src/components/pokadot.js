console.log("Pokadot.js Loaded"); // Debugging 

function createBackgroundDots(count) {
    
    const container = document.getElementById("background-dots");

    if (!container) {
        console.error("Error: #background-dots container not found!");
        return;
    }
  
    for (let i = 0; i < count; i++) {
      let dot = document.createElement("div");
      let size = Math.floor(Math.random() * 80) + 10; // Random size between 10px and 90px
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      
      dot.classList.add("bg-dot");
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      
      container.appendChild(dot);
    }
  }
  
window.onload = () => createBackgroundDots(50); // Adjust number of dots
  