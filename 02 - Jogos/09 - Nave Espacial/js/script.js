const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const status = document.getElementById('status');

let ship = {
    x: canvas.width / 2 - 20,
    y: canvas.height - 60,
    width: 40,
    height: 60,
    dx: 0,
    speed: 5
};

let obstacles = [];
let obstacleFrequency = 90; // A cada 90 frames, um novo obstáculo aparece
let frameCount = 0;
let gameOver = false;

function drawShip() {
    ctx.fillStyle = '#0f0';
    ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
}

function drawObstacles() {
    ctx.fillStyle = '#f00';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.y += obstacle.speed;
    });
}

function createObstacle() {
    const obstacleWidth = Math.random() * 60 + 20;
    const obstacleX = Math.random() * (canvas.width - obstacleWidth);
    obstacles.push({
        x: obstacleX,
        y: -20,
        width: obstacleWidth,
        height: 20,
        speed: 3 + Math.random() * 3
    });
}

function detectCollision() {
    obstacles.forEach(obstacle => {
        if (ship.x < obstacle.x + obstacle.width &&
            ship.x + ship.width > obstacle.x &&
            ship.y < obstacle.y + obstacle.height &&
            ship.y + ship.height > obstacle.y) {
            gameOver = true;
            status.textContent = 'Game Over! Pressione F5 para reiniciar.';
        }
    });
}

function update() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ship.x += ship.dx;

    // Impede que a nave saia do canvas
    if (ship.x < 0) ship.x = 0;
    if (ship.x + ship.width > canvas.width) ship.x = canvas.width - ship.width;

    drawShip();
    drawObstacles();
    detectCollision();

    frameCount++;
    if (frameCount % obstacleFrequency === 0) {
        createObstacle();
    }

    requestAnimationFrame(update);
}

function moveShip(event) {
    if (event.key === 'a') {
        ship.dx = -ship.speed;
    } else if (event.key === 'd') {
        ship.dx = ship.speed;
    }
}

function stopShip(event) {
    if (event.key === 'a' || event.key === 'd') {
        ship.dx = 0;
    }
}

document.addEventListener('keydown', moveShip);
document.addEventListener('keyup', stopShip);

update();
