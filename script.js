document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.centered-box');
    let x = 0;
    let y = 0;
    let xSpeed = 0.5;
    let ySpeed = 0.5;

    function moveBox() {
        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        x += xSpeed;
        y += ySpeed;

        if (x + boxWidth > screenWidth || x < 0) {
            xSpeed *= -1;
        }
        if (y + boxHeight > screenHeight || y < 0) {
            ySpeed *= -1;
        }

        box.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(moveBox);
    }

    moveBox();
});