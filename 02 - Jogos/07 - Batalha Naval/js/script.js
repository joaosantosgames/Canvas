const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 10;
const tileSize = canvas.width / gridSize;
const ships = [
    { size: 4, positions: [], sunk: false },
    { size: 3, positions: [], sunk: false },
    { size: 3, positions: [], sunk: false },
    { size: 2, positions: [], sunk: false },
    { size: 2, positions: [], sunk: false },
    { size: 1, positions: [], sunk: false },
    { size: 1, positions: [], sunk: false }
];
let playerGrid = createEmptyGrid();
let enemyGrid = createEmptyGrid();
let playerTurn = true;
let gameOver = false;

function createEmptyGrid() {
    return Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));
}

function drawGrid(grid, isPlayer) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const tileX = x * tileSize;
            const tileY = y * tileSize;
            ctx.strokeRect(tileX, tileY, tileSize, tileSize);

            if (grid[y][x] === 'ship') {
                ctx.fillStyle = isPlayer ? 'gray' : 'white';
                ctx.fillRect(tileX, tileY, tileSize, tileSize);
            } else if (grid[y][x] === 'hit') {
                ctx.fillStyle = 'red';
                ctx.fillRect(tileX, tileY, tileSize, tileSize);
            } else if (grid[y][x] === 'miss') {
                ctx.fillStyle = 'blue';
                ctx.fillRect(tileX, tileY, tileSize, tileSize);
            }
        }
    }
}

function placeShips(grid, ships) {
    ships.forEach(ship => {
        let placed = false;
        while (!placed) {
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const x = Math.floor(Math.random() * (orientation === 'horizontal' ? gridSize - ship.size : gridSize));
            const y = Math.floor(Math.random() * (orientation === 'vertical' ? gridSize - ship.size : gridSize));

            if (canPlaceShip(grid, ship, x, y, orientation)) {
                for (let i = 0; i < ship.size; i++) {
                    if (orientation === 'horizontal') {
                        grid[y][x + i] = 'ship';
                        ship.positions.push({ x: x + i, y });
                    } else {
                        grid[y + i][x] = 'ship';
                        ship.positions.push({ x, y: y + i });
                    }
                }
                placed = true;
            }
        }
    });
}

function canPlaceShip(grid, ship, x, y, orientation) {
    for (let i = 0; i < ship.size; i++) {
        if (orientation === 'horizontal') {
            if (grid[y][x + i] !== null) return false;
        } else {
            if (grid[y + i][x] !== null) return false;
        }
    }
    return true;
}

function handleClick(event) {
    if (!playerTurn || gameOver) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / tileSize);
    const y = Math.floor((event.clientY - rect.top) / tileSize);

    if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) return;

    if (enemyGrid[y][x] === null) {
        if (enemyGrid[y][x] === 'ship') {
            enemyGrid[y][x] = 'hit';
            document.getElementById('status').textContent = 'Acertou!';
        } else {
            enemyGrid[y][x] = 'miss';
            document.getElementById('status').textContent = 'Errou!';
        }
        playerTurn = false;
        checkGameOver();
        setTimeout(enemyMove, 1000);
    }
    drawGrids();
}

function enemyMove() {
    if (gameOver) return;

    let x, y;
    do {
        x = Math.floor(Math.random() * gridSize);
        y = Math.floor(Math.random() * gridSize);
    } while (playerGrid[y][x] !== null);

    if (playerGrid[y][x] === 'ship') {
        playerGrid[y][x] = 'hit';
        document.getElementById('status').textContent = 'Inimigo acertou!';
    } else {
        playerGrid[y][x] = 'miss';
        document.getElementById('status').textContent = 'Inimigo errou!';
    }

    playerTurn = true;
    checkGameOver();
    drawGrids();
}

function checkGameOver() {
    const playerLost = playerGrid.flat().filter(x => x === 'ship').length === 0;
    const enemyLost = enemyGrid.flat().filter(x => x === 'ship').length === 0;

    if (playerLost || enemyLost) {
        gameOver = true;
        document.getElementById('status').textContent = playerLost ? 'Você perdeu!' : 'Você venceu!';
    }
}

function drawGrids() {
    drawGrid(playerGrid, true);
    drawGrid(enemyGrid, false);
}

function resetGame() {
    playerGrid = createEmptyGrid();
    enemyGrid = createEmptyGrid();
    ships.forEach(ship => ship.positions = []);
    placeShips(playerGrid, ships);
    placeShips(enemyGrid, ships);
    playerTurn = true;
    gameOver = false;
    document.getElementById('status').textContent = 'Seu turno!';
    drawGrids();
}

canvas.addEventListener('click', handleClick);
document.getElementById('resetButton').addEventListener('click', resetGame);

resetGame();
