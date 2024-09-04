// script.js

// Configurações iniciais
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const gridSize = 20;
let snake = [{ x: 160, y: 160 }];
let dx = gridSize;
let dy = 0;
let score = 0;
let changingDirection = false;

// Tipos de comida com cores e pontuações diferentes
const foodTypes = [
    { color: 'red', points: 10 },
    { color: 'blue', points: 20 },
    { color: 'yellow', points: 30 },
    { color: 'purple', points: 40 }
];

let food = spawnFood();

// Função para desenhar a cobrinha
function drawSnake() {
    ctx.fillStyle = 'lightgreen';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, gridSize, gridSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(part.x, part.y, gridSize, gridSize);
    });
}

// Função para mover a cobrinha
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    snake.unshift(head); // Adiciona a nova cabeça da cobra ao início

    if (head.x === food.x && head.y === food.y) {
        score += food.points;
        food = spawnFood(); // Gera uma nova comida
    } else {
        snake.pop(); // Remove a última parte da cobra
    }
}

// Função para desenhar a comida
function drawFood() {
    ctx.fillStyle = food.color;
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

// Função para gerar comida em uma posição aleatória
function spawnFood() {
    const foodX = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
    const foodY = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
    const randomFoodType = foodTypes[Math.floor(Math.random() * foodTypes.length)];
    return { x: foodX, y: foodY, ...randomFoodType };
}

// Função para verificar colisões com as paredes e o próprio corpo
function checkCollision() {
    const head = snake[0];

    // Verifica colisão com as bordas
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    // Verifica colisão com o próprio corpo
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Função para encontrar o melhor caminho até a comida
function findBestPath() {
    const head = snake[0];
    const path = [];

    if (head.x < food.x) {
        path.push({ dx: gridSize, dy: 0 });
    } else if (head.x > food.x) {
        path.push({ dx: -gridSize, dy: 0 });
    } else if (head.y < food.y) {
        path.push({ dx: 0, dy: gridSize });
    } else if (head.y > food.y) {
        path.push({ dx: 0, dy: -gridSize });
    }

    return path;
}

// Função principal para desenhar e atualizar o jogo
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSnake();
    drawFood();
}

// Função principal de atualização do jogo
function update() {
    if (checkCollision()) {
        alert("Game Over! Sua pontuação: " + score);
        document.location.reload();
    }

    const path = findBestPath();
    if (path.length > 0) {
        dx = path[0].dx;
        dy = path[0].dy;
    }

    moveSnake();
    draw();
}

// Função de loop do jogo
function gameLoop() {
    setTimeout(() => {
        changingDirection = false;
        update();
        requestAnimationFrame(gameLoop);
    }, 100);
}

// Inicia o jogo
gameLoop();
