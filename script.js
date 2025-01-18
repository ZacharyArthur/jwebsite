document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.centered-box');
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    let x = (window.innerWidth - boxWidth) / 2;
    let y = (window.innerHeight - boxHeight) / 2;
    let xSpeed = 0;
    let ySpeed = 0;
    const escapeDistance = 100;

    function moveBox() {
        x += xSpeed;
        y += ySpeed;

        x = Math.max(0, Math.min(x, window.innerWidth - boxWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - boxHeight));

        box.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(moveBox);
    }

    function onMouseMove(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const boxRect = box.getBoundingClientRect();
        const boxCenterX = boxRect.left + boxRect.width / 2;
        const boxCenterY = boxRect.top + boxRect.height / 2;

        const distanceX = mouseX - boxCenterX;
        const distanceY = mouseY - boxCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < escapeDistance) {
            xSpeed = -distanceX / distance * 1.1;
            ySpeed = -distanceY / distance * 1.1;
        } else {
            xSpeed = 0;
            ySpeed = 0;
        }
    }

    document.addEventListener('mousemove', onMouseMove);
    moveBox();
});