// script.js

// Configurações iniciais
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const paddleWidth = 10;
const paddleHeight = 100;
const ballRadius = 10;
const maxScore = 100;
const pointValue = 5;

// Raquetes
const player1 = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    score: 0
};

const player2 = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    score: 0
};

// Bolas
const balls = [
    {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: ballRadius,
        dx: 4,
        dy: 4
    },
    {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: ballRadius,
        dx: -4,
        dy: -4
    },
    {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: ballRadius,
        dx: 4,
        dy: -4
    },
    {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: ballRadius,
        dx: -4,
        dy: 4
    }
];

// Função para desenhar a raquete
function drawPaddle(paddle) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// Função para desenhar a bola
function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

// Função para desenhar a pontuação
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(`Player 1: ${player1.score}`, 20, 20);
    ctx.fillText(`Player 2: ${player2.score}`, canvas.width - 120, 20);
}

// Função para mover as raquetes
function movePaddle(paddle) {
    paddle.y += paddle.dy;

    // Impede que as raquetes saiam do canvas
    if (paddle.y < 0) {
        paddle.y = 0;
    } else if (paddle.y + paddle.height > canvas.height) {
        paddle.y = canvas.height - paddle.height;
    }
}

// Função para mover a bola
function moveBall(ball) {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Verifica colisão com as paredes superior e inferior
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    // Verifica colisão com as raquetes
    if (ball.x - ball.radius < player1.x + player1.width &&
        ball.y > player1.y && ball.y < player1.y + player1.height) {
        ball.dx *= -1;
    }

    if (ball.x + ball.radius > player2.x &&
        ball.y > player2.y && ball.y < player2.y + player2.height) {
        ball.dx *= -1;
    }

    // Verifica se a bola saiu da tela (ponto para o adversário)
    if (ball.x + ball.radius < 0) {
        player2.score += pointValue;
        resetBall(ball);
    } else if (ball.x - ball.radius > canvas.width) {
        player1.score += pointValue;
        resetBall(ball);
    }

    // Verifica se algum jogador atingiu a pontuação máxima
    if (player1.score >= maxScore || player2.score >= maxScore) {
        alert(`Fim de jogo! ${player1.score >= maxScore ? 'Player 1' : 'Player 2'} venceu!`);
        player1.score = 0;
        player2.score = 0;
        balls.forEach(resetBall);
    }
}

// Função para resetar a bola após um ponto
function resetBall(ball) {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1;
}

// Função principal de atualização do jogo
function update() {
    movePaddle(player1);
    movePaddle(player2);
    balls.forEach(moveBall);
    movePaddleAI();
}

// Função principal para desenhar o jogo
function draw() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddle(player1);
    drawPaddle(player2);
    balls.forEach(drawBall);
    drawScore();
}

// Função de loop do jogo
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Controle das raquetes com teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
        player1.dy = -6;
    } else if (e.key === 's') {
        player1.dy = 6;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 's') {
        player1.dy = 0;
    }
});

// Função de IA para mover a raquete direita
function movePaddleAI() {
    const ball = balls[0]; // Usando a primeira bola para a IA
    if (ball.y < player2.y + player2.height / 2) {
        player2.dy = -4;
    } else {
        player2.dy = 4;
    }
}

// Inicia o jogo
gameLoop();
