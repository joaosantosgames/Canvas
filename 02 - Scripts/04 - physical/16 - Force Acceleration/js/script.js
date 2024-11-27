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
    state: 'accelerating', // estado inicial
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
        case 'accelerating':
            ball.deformation = 1.2; // deformação durante a aceleração
            break;
        case 'collision':
            ball.deformation = 0.8; // deformação durante a colisão
            break;
        case 'decelerating':
            ball.deformation = 1.1; // deformação durante a desaceleração
            break;
        default:
            ball.deformation = 1; // sem deformação
    }

    ball.vx *= ball.friction;
    ball.x += ball.vx;

    // Colisão com a borda direita
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.vx *= -1;
        ball.state = 'collision'; // muda o estado para colisão
    }

    // Verifica o estado de desaceleração
    if (Math.abs(ball.vx) < 10) {
        ball.state = 'decelerating'; // muda o estado para desaceleração
    }

    // Inércia
    if (Math.abs(ball.vx) < 0.1) {
        ball.vx = 0;
        ball.state = 'stopped'; // muda o estado para parado
    }
}

function animate() {
    drawBall();
    updateBall();
    requestAnimationFrame(animate);
}

animate();
