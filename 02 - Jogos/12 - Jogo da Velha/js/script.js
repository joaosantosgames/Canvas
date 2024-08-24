// script.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

const cellSize = canvas.width / 3;
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false;

// Desenha o tabuleiro
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Linhas horizontais
    ctx.beginPath();
    ctx.moveTo(0, cellSize);
    ctx.lineTo(canvas.width, cellSize);
    ctx.moveTo(0, 2 * cellSize);
    ctx.lineTo(canvas.width, 2 * cellSize);

    // Linhas verticais
    ctx.moveTo(cellSize, 0);
    ctx.lineTo(cellSize, canvas.height);
    ctx.moveTo(2 * cellSize, 0);
    ctx.lineTo(2 * cellSize, canvas.height);

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Desenha X ou O
function drawMark(x, y, player) {
    ctx.beginPath();
    if (player === 'X') {
        ctx.moveTo(x * cellSize + 20, y * cellSize + 20);
        ctx.lineTo(x * cellSize + cellSize - 20, y * cellSize + cellSize - 20);
        ctx.moveTo(x * cellSize + cellSize - 20, y * cellSize + 20);
        ctx.lineTo(x * cellSize + 20, y * cellSize + cellSize - 20);
    } else {
        ctx.arc(
            x * cellSize + cellSize / 2,
            y * cellSize + cellSize / 2,
            cellSize / 2 - 20,
            0,
            2 * Math.PI
        );
    }
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Verifica se há um vencedor ou empate
function checkWinner() {
    // Verifica linhas, colunas e diagonais
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return currentPlayer;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return currentPlayer;
        }
    }

    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return currentPlayer;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return currentPlayer;
    }

    // Verifica se todas as células estão preenchidas (empate)
    let isDraw = true;
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[r][c] === '') {
                isDraw = false;
                break;
            }
        }
    }

    return isDraw ? 'Draw' : null;
}

// Lida com o clique do jogador
canvas.addEventListener('click', (e) => {
    if (gameOver) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const x = Math.floor(clickX / cellSize);
    const y = Math.floor(clickY / cellSize);

    if (board[y][x] === '') {
        board[y][x] = currentPlayer;
        drawMark(x, y, currentPlayer);

        const result = checkWinner();
        if (result) {
            gameOver = true;
            setTimeout(() => {
                alert(result === 'Draw' ? "Empate!" : `${currentPlayer} venceu!`);
                document.location.reload();
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
});

// Desenha o tabuleiro inicial
drawBoard();
