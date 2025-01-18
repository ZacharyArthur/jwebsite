document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.centered-box');
    let x = 0;
    let y = 0;
    let xSpeed = 2;
    let ySpeed = 2;
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    function moveBox() {
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