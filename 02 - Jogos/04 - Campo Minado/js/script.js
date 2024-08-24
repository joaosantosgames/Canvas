const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 10;
const tileSize = canvas.width / gridSize;
const mineCount = 15;
let grid = [];
let revealedGrid = [];
let gameOver = false;

function createGrid() {
    grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));
    revealedGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));

    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        if (grid[y][x] === 0) {
            grid[y][x] = -1;
            minesPlaced++;
        }
    }

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (grid[y][x] === -1) continue;
            grid[y][x] = countMinesAround(x, y);
        }
    }
}

function countMinesAround(x, y) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    let count = 0;

    directions.forEach(([dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
            if (grid[newY][newX] === -1) count++;
        }
    });

    return count;
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const tileX = x * tileSize;
            const tileY = y * tileSize;
            ctx.strokeStyle = 'black';
            ctx.strokeRect(tileX, tileY, tileSize, tileSize);

            if (revealedGrid[y][x]) {
                if (grid[y][x] === -1) {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(tileX, tileY, tileSize, tileSize);
                } else {
                    ctx.fillStyle = '#ddd';
                    ctx.fillRect(tileX, tileY, tileSize, tileSize);
                    if (grid[y][x] > 0) {
                        ctx.fillStyle = 'black';
                        ctx.font = '20px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(grid[y][x], tileX + tileSize / 2, tileY + tileSize / 2);
                    }
                }
            } else {
                ctx.fillStyle = '#aaa';
                ctx.fillRect(tileX, tileY, tileSize, tileSize);
            }
        }
    }
}

function revealTile(x, y) {
    if (x < 0 || x >= gridSize || y < 0 || y >= gridSize || revealedGrid[y][x]) return;
    revealedGrid[y][x] = true;

    if (grid[y][x] === -1) {
        gameOver = true;
        document.getElementById('status').textContent = 'Você perdeu!';
        revealAllMines();
        drawGrid();
    } else if (grid[y][x] === 0) {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],         [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        directions.forEach(([dx, dy]) => {
            revealTile(x + dx, y + dy);
        });
    }

    drawGrid();
    checkWin();
}

function revealAllMines() {
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (grid[y][x] === -1) {
                revealedGrid[y][x] = true;
            }
        }
    }
}

function checkWin() {
    let revealedCount = 0;
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (revealedGrid[y][x]) revealedCount++;
        }
    }

    if (revealedCount === gridSize * gridSize - mineCount && !gameOver) {
        document.getElementById('status').textContent = 'Você venceu!';
        gameOver = true;
    }
}

function handleClick(event) {
    if (gameOver) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / tileSize);
    const y = Math.floor((event.clientY - rect.top) / tileSize);

    revealTile(x, y);
}

function resetGame() {
    createGrid();
    gameOver = false;
    document.getElementById('status').textContent = '';
    drawGrid();
}

canvas.addEventListener('click', handleClick);
document.getElementById('resetButton').addEventListener('click', resetGame);

resetGame();
