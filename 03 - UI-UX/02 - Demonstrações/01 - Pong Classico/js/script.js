const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

let paddleWidth = 10, paddleHeight = 100;
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;
let player2Y = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = 4, ballSpeedY = 4;
let playerScore = 0, aiScore = 0;
let difficulty = 'medium';
let gameMode = 'single';
let powerUps = [];
let powerUpActive = false;
let gamePaused = false;

// Função para iniciar o jogo com a dificuldade e modo selecionados
function startGame(selectedDifficulty, mode) {
    difficulty = selectedDifficulty;
    gameMode = mode;
    document.querySelector('.menu').style.display = 'none';
    canvas.style.display = 'block';
    document.querySelector('.game-controls').style.display = 'flex';
    resetBall();
    gameLoop();
}

// Função para resetar a posição da bola
function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = 4;
    ballSpeedY = 4;
}

// Função para resetar o jogo
function resetGame() {
    playerScore = 0;
    aiScore = 0;
    resetBall();
}

// Função para pausar o jogo
function pauseGame() {
    gamePaused = !gamePaused;
    if (!gamePaused) {
        gameLoop();
    }
}

// Função principal do jogo
function gameLoop() {
    if (!gamePaused) {
        moveBall();
        if (gameMode === 'single') {
            moveAI();
        } else {
            movePlayer2();
        }
        drawEverything();
        requestAnimationFrame(gameLoop);
    }
}

// Função para mover a bola
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Aceleração da bola
    ballSpeedX *= 1.001;
    ballSpeedY *= 1.001;

    // Colisão com as paredes superior e inferior
    if (ballY <= 0 || ballY >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    // Colisão com as raquetes
    if (ballX <= paddleWidth) {
        if (ballY > playerY && ballY < playerY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            aiScore++;
            resetBall();
        }
    }

    if (ballX >= canvas.width - paddleWidth) {
        if (ballY > (gameMode === 'single' ? aiY : player2Y) && ballY < (gameMode === 'single' ? aiY : player2Y) + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            playerScore++;
            resetBall();
        }
    }

    // Power-ups
    if (Math.random() < 0.01 && !powerUpActive) {
        spawnPowerUp();
    }

    checkPowerUpCollision();
}

// Função para mover a raquete da IA
function moveAI() {
    let aiSpeed;
    if (difficulty === 'easy') {
        aiSpeed = 2;
    } else if (difficulty === 'medium') {
        aiSpeed = 4;
    } else {
        aiSpeed = 6;
    }

    if (aiY + paddleHeight / 2 < ballY) {
        aiY += aiSpeed;
    } else {
        aiY -= aiSpeed;
    }
}

// Função para mover a raquete do segundo jogador
function movePlayer2() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'w') {
            player2Y -= 20;
        } else if (event.key === 's') {
            player2Y += 20;
        }
    });
}

// Função para desenhar todos os elementos do jogo
function drawEverything() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar a raquete do jogador
    ctx.fillStyle = 'white';
    ctx.fillRect(0, playerY, paddleWidth, paddleHeight);

    // Desenhar a raquete da IA ou do segundo jogador
    ctx.fillRect(canvas.width - paddleWidth, gameMode === 'single' ? aiY : player2Y, paddleWidth, paddleHeight);

    // Desenhar a bola
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
    ctx.fill();

    // Desenhar o placar
    ctx.font = '32px Arial';
    ctx.fillText(playerScore, 100, 50);
    ctx.fillText(aiScore, canvas.width - 100, 50);

    // Desenhar power-ups
    powerUps.forEach(powerUp => {
        ctx.fillStyle = powerUp.color;
        ctx.fillRect(powerUp.x, powerUp.y, powerUp.size, powerUp.size);
    });
}

// Função para spawnar power-ups
function spawnPowerUp() {
    const powerUp = {
        x: Math.random() * (canvas.width - 20),
        y: Math.random() * (canvas.height - 20),
        size: 20,
        color: 'yellow'
    };
    powerUps.push(powerUp);
    powerUpActive = true;
}

// Função para verificar colisão com power-ups
function checkPowerUpCollision() {
    powerUps.forEach((powerUp, index) => {
        if (ballX > powerUp.x && ballX < powerUp.x + powerUp.size && ballY > powerUp.y && ballY < powerUp.y + powerUp.size) {
            ballSpeedX *= 1.5;
            ballSpeedY *= 1.5;
            powerUps.splice(index, 1);
            powerUpActive = false;
        }
    });
}

// Adicionar controle da raquete do jogador
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        playerY -= 20;
    } else if (event.key === 'ArrowDown') {
        playerY += 20;
    }
});
