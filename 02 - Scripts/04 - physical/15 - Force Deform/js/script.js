const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

const ball = {
    x: 50,
    y: canvas.height / 2,
    radius: 20,
    vx: 20, // velocidade inicial maior
    friction: 0.98, // coeficiente de atrito
    deformed: false,
    deformScale: 1.2 // escala de deformação
};

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    if (ball.deformed) {
        ctx.ellipse(ball.x, ball.y, ball.radius * ball.deformScale, ball.radius, 0, 0, Math.PI * 2);
    } else {
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    }
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function updateBall() {
    ball.vx *= ball.friction;
    ball.x += ball.vx;

    // Colisão com a borda direita
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.vx *= -1;
        ball.deformed = true;
    }

    // Inércia
    if (Math.abs(ball.vx) < 0.1) {
        ball.vx = 0;
    }
}

function animate() {
    drawBall();
    updateBall();
    requestAnimationFrame(animate);
}

animate();
