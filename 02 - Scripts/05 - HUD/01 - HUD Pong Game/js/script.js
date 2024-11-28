// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const player1NameInput = document.getElementById('player1-name');
const player2NameInput = document.getElementById('player2-name');

// Configurações iniciais do jogo
let player1Name = 'Player 1';
let player2Name = 'Player 2';
let player1Score = 0;
let player2Score = 0;
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

// Objetos do jogo
const player1 = { x: 10, y: canvas.height / 2 - paddleHeight / 2 };
const player2 = { x: canvas.width - 20, y: canvas.height / 2 - paddleHeight / 2 };
const ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 5, dy: 4 };

// Função para desenhar os elementos no canvas
function draw() {
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar as pás
    ctx.fillStyle = '#fff';
    ctx.fillRect(player1.x, player1.y, paddleWidth, paddleHeight);
    ctx.fillRect(player2.x, player2.y, paddleWidth, paddleHeight);

    // Desenhar a bola
    ctx.fillRect(ball.x, ball.y, ballSize, ballSize);

    // Desenhar o HUD
    ctx.font = '20px Arial';
    ctx.fillText(`${player1Name}: ${player1Score}`, 20, 30);
    ctx.fillText(`${player2Name}: ${player2Score}`, canvas.width - 150, 30);
}

// Função para atualizar a posição dos elementos
function update() {
    // Mover a bola
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Verificar colisão com as paredes
    if (ball.y <= 0 || ball.y + ballSize >= canvas.height) {
        ball.dy *= -1; // Inverter direção vertical
    }

    // Verificar colisão com as pás
    if (ball.x <= player1.x + paddleWidth && ball.y >= player1.y && ball.y <= player1.y + paddleHeight) {
        ball.dx *= -1; // Inverter direção horizontal
    }

    if (ball.x + ballSize >= player2.x && ball.y >= player2.y && ball.y <= player2.y + paddleHeight) {
        ball.dx *= -1; // Inverter direção horizontal
    }

    // Atualizar pontuação e reiniciar a bola se ultrapassar os limites laterais
    if (ball.x <= 0) {
        player2Score++;
        resetBall();
    }
    if (ball.x + ballSize >= canvas.width) {
        player1Score++;
        resetBall();
    }
}

// Função para reiniciar a posição da bola
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1; // Mudar direção da bola
}

// Função principal do loop do jogo
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Adicionar event listeners para os inputs dos nomes dos jogadores
player1NameInput.addEventListener('input', (e) => {
    player1Name = e.target.value || 'Player 1'; // Atualizar nome do Player 1
});

player2NameInput.addEventListener('input', (e) => {
    player2Name = e.target.value || 'Player 2'; // Atualizar nome do Player 2
});

// Iniciar o loop do jogo
gameLoop();
