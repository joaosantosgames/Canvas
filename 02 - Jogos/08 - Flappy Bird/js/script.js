// script.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 320;
canvas.height = 480;

const gravity = 0.5;
const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 20,
    height: 20,
    velocity: 0,
};

const pipes = [];
const pipeWidth = 50;
const pipeGap = 120;
let frameCount = 0;
let gameRunning = true;
let score = 0;

// Desenha o pássaro
function drawBird() {
    ctx.fillStyle = "#FF0";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

// Cria os canos
function createPipes() {
    const pipeY = Math.random() * (canvas.height - pipeGap);
    pipes.push({
        x: canvas.width,
        topY: pipeY,
        bottomY: pipeY + pipeGap,
    });
}

// Desenha os canos
function drawPipes() {
    ctx.fillStyle = "#0F0";
    for (const pipe of pipes) {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topY);
        ctx.fillRect(pipe.x, pipe.bottomY, pipeWidth, canvas.height - pipe.bottomY);
    }
}

// Atualiza a posição dos canos e os remove se saírem da tela
function updatePipes() {
    for (const pipe of pipes) {
        pipe.x -= 2;
    }
    if (pipes.length && pipes[0].x + pipeWidth < 0) {
        pipes.shift();
        score++;
    }
}

// Verifica colisões do pássaro com os canos ou com o chão/teto
function checkCollisions() {
    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        gameRunning = false;
    }

    for (const pipe of pipes) {
        if (
            bird.x + bird.width > pipe.x &&
            bird.x < pipe.x + pipeWidth &&
            (bird.y < pipe.topY || bird.y + bird.height > pipe.bottomY)
        ) {
            gameRunning = false;
        }
    }
}

// Atualiza a física do pássaro
function updateBird() {
    bird.velocity += gravity;
    bird.y += bird.velocity;
}

// Desenha a pontuação
function drawScore() {
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 25);
}

// Função principal do jogo
function gameLoop() {
    if (gameRunning) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBird();
        drawPipes();
        drawScore();

        updateBird();
        updatePipes();
        checkCollisions();

        if (frameCount % 90 === 0) {
            createPipes();
        }

        frameCount++;
        requestAnimationFrame(gameLoop);
    } else {
        ctx.fillStyle = "#000";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", canvas.width / 2 - 75, canvas.height / 2);
        ctx.fillText(`Score: ${score}`, canvas.width / 2 - 50, canvas.height / 2 + 40);
    }
}

// Reinicia o jogo ao clicar ou pressionar uma tecla
document.addEventListener('keydown', () => {
    if (!gameRunning) {
        bird.y = canvas.height / 2;
        bird.velocity = 0;
        pipes.length = 0;
        score = 0;
        frameCount = 0;
        gameRunning = true;
        gameLoop();
    } else {
        bird.velocity = -10;
    }
});

canvas.addEventListener('click', () => {
    if (gameRunning) {
        bird.velocity = -10;
    } else {
        bird.y = canvas.height / 2;
        bird.velocity = 0;
        pipes.length = 0;
        score = 0;
        frameCount = 0;
        gameRunning = true;
        gameLoop();
    }
});

// Inicia o loop do jogo
gameLoop();
