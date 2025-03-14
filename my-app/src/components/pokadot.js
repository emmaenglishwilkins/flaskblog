function createBackgroundDots() {
  console.log("createBackgroundDots called with fixed positions");

  const container = document.getElementById("background-dots");
  if (!container) {
      console.error("Error: #background-dots container not found!");
      return;
  }

  const fixedDots = [
      { x: 100, y: 150, size: 40 },
      { x: 300, y: 250, size: 55 },
      { x: 500, y: 100, size: 35 },
      { x: 700, y: 400, size: 65 },
      { x: 900, y: 200, size: 50 },
      { x: 1200, y: 350, size: 70 },
      { x: 1400, y: 150, size: 45 },
      { x: 200, y: 500, size: 60 },
      { x: 450, y: 550, size: 50 },
      { x: 850, y: 600, size: 75 },
      { x: 1100, y: 480, size: 55 },
      { x: 1300, y: 650, size: 40 }
  ];

  for (const { x, y, size } of fixedDots) {
      let dot = document.createElement("div");
      dot.classList.add("bg-dot");
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${x - size / 2}px`;
      dot.style.top = `${y - size / 2}px`;

      container.appendChild(dot);
  }

  console.log("Created", fixedDots.length, "dots");
}

// Export the function
export { createBackgroundDots };
