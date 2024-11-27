const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    vy: 5, // velocidade inicial para baixo
    ax: 0.05, // aceleração horizontal para curva
    ay: 0, // aceleração vertical
    friction: 0.98, // coeficiente de atrito
    state: 'falling', // estado inicial
    deformation: 1 // escala de deformação inicial
};

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.ellipse(ball.x, ball.y, ball.radius * ball.deformation, ball.radius, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function updateBall() {
    // Atualiza a deformação baseado no estado
    switch (ball.state) {
        case 'falling':
            ball.deformation = 1.2; // deformação durante a queda
            ball.ay = 0.2; // aceleração vertical para baixo
            break;
        case 'rising':
            ball.deformation = 0.8; // deformação durante a subida
            ball.ay = -0.4; // aceleração vertical para cima (2x maior)
            break;
        case 'curving':
            ball.deformation = 1.1; // deformação durante a curva
            ball.ax = 0.1; // aceleração horizontal para curva
            break;
        default:
            ball.deformation = 1; // sem deformação
    }

    // Atualiza as velocidades
    ball.vy += ball.ay;
    ball.x += ball.ax;
    ball.y += ball.vy;

    // Verifica se a bola atinge a borda inferior
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.vy *= -1;
        ball.state = 'rising'; // muda o estado para subida
    }

    // Verifica se a bola atinge a borda superior
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.vy *= -1;
        ball.state = 'curving'; // muda o estado para curva
    }

    // Inércia
    if (Math.abs(ball.vy) < 0.1) {
        ball.vy = 0;
        ball.ax = 0;
        ball.ay = 0;
        ball.state = 'stopped'; // muda o estado para parado
    }
}

function animate() {
    drawBall();
    updateBall();
    requestAnimationFrame(animate);
}

animate();
