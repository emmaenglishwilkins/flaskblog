const draggables = document.querySelectorAll('.draggable');

draggables.forEach(img => {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;
    
    img.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
    
    function startDragging(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = img.offsetLeft;
        initialTop = img.offsetTop;
        img.style.cursor = 'grabbing';
    }
    
    function drag(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        img.style.left = `${initialLeft + dx}px`;
        img.style.top = `${initialTop + dy}px`;
    }
    
    function stopDragging() {
        isDragging = false;
        img.style.cursor = 'move';
    }
});