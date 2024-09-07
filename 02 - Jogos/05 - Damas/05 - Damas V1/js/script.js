const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const boardSize = 8;
const tileSize = canvas.width / boardSize;
const pieces = [];
let selectedPiece = null;
let currentPlayer = 'red';

function initBoard() {
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            if ((x + y) % 2 === 1) {
                if (y < 3) {
                    pieces.push({ x, y, player: 'red', king: false });
                } else if (y > 4) {
                    pieces.push({ x, y, player: 'black', king: false });
                }
            }
        }
    }
}

function drawBoard() {
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            ctx.fillStyle = (x + y) % 2 === 0 ? '#d18b47' : '#ffce9e';
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    for (const piece of pieces) {
        ctx.beginPath();
        ctx.arc(
            piece.x * tileSize + tileSize / 2,
            piece.y * tileSize + tileSize / 2,
            tileSize / 2 - 10,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = piece.player;
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
        if (piece.king) {
            ctx.fillStyle = 'gold';
            ctx.font = '24px Arial';
            ctx.fillText('K', piece.x * tileSize + 15, piece.y * tileSize + 30);
        }
    }
}

function getPiece(x, y) {
    return pieces.find(p => p.x === x && p.y === y);
}

function isValidMove(piece, newX, newY) {
    const dx = newX - piece.x;
    const dy = newY - piece.y;

    if (Math.abs(dx) === 1 && dy === (piece.player === 'red' ? 1 : -1)) {
        return !getPiece(newX, newY);
    } else if (Math.abs(dx) === 2 && Math.abs(dy) === 2) {
        const middleX = piece.x + dx / 2;
        const middleY = piece.y + dy / 2;
        const middlePiece = getPiece(middleX, middleY);
        if (middlePiece && middlePiece.player !== piece.player) {
            return !getPiece(newX, newY);
        }
    }

    return false;
}

function movePiece(piece, newX, newY) {
    const dx = newX - piece.x;
    const dy = newY - piece.y;

    if (Math.abs(dx) === 2 && Math.abs(dy) === 2) {
        const middleX = piece.x + dx / 2;
        const middleY = piece.y + dy / 2;
        const middlePiece = getPiece(middleX, middleY);
        pieces.splice(pieces.indexOf(middlePiece), 1);
    }

    piece.x = newX;
    piece.y = newY;

    if ((piece.player === 'red' && newY === boardSize - 1) || (piece.player === 'black' && newY === 0)) {
        piece.king = true;
    }

    currentPlayer = currentPlayer === 'red' ? 'black' : 'red';
}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / tileSize);
    const y = Math.floor((event.clientY - rect.top) / tileSize);

    if (!selectedPiece) {
        const piece = getPiece(x, y);
        if (piece && piece.player === currentPlayer) {
            selectedPiece = piece;
            document.getElementById('status').textContent = `Peça selecionada: (${x}, ${y})`;
        }
    } else {
        if (isValidMove(selectedPiece, x, y)) {
            movePiece(selectedPiece, x, y);
            selectedPiece = null;
            document.getElementById('status').textContent = '';
            drawBoard();
        } else {
            document.getElementById('status').textContent = 'Movimento inválido.';
            selectedPiece = null;
        }
    }
});

initBoard();
drawBoard();
