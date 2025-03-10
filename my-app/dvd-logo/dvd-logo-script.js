const logo = document.getElementById('dvd-logo');
let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

function animateLogo() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    x += dx;
    y += dy;

    if (x + logo.width > windowWidth) {
        x = windowWidth - logo.width;
        dx = -dx;
        changeColor();
    }
    if (x < 0) {
        x = 0;
        dx = -dx;
        changeColor();
    }
    if (y + logo.height > windowHeight) {
        y = windowHeight - logo.height;
        dy = -dy;
        changeColor();
    }
    if (y < 0) {
        y = 0;
        dy = -dy;
        changeColor();
    }

    logo.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animateLogo);
}

function changeColor() {
    logo.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}

animateLogo();