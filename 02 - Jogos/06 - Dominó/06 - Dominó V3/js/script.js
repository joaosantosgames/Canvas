// Seleciona o canvas e define o contexto 2D
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define a largura e altura do canvas
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// Carrega as imagens das peças de dominó
const dominoImages = [];
for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
        const img = new Image();
        img.src = `images/domino${i}-${j}.png`;
        dominoImages.push({ img, value: [i, j] });
    }
}

// Variáveis para o jogo
let playerHand = [];
let opponentHand = [];
let board = [];
let currentPlayer = 0; // 0 para jogador, 1 para oponente
let moves = 0;
let gamesPlayed = 0;
let selectedDomino = null;
let offsetX, offsetY;
let isDragging = false;
let stock = [];
let boardX = canvas.width / 2;
let boardY = canvas.height / 2;

// Função para desenhar uma peça de dominó
function drawDomino(domino, x, y, hidden = false) {
    if (hidden) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(x, y, 60, 120);
    } else {
        ctx.drawImage(domino.img, x, y, 60, 120);
    }
}

// Função para desenhar a mão do jogador
function drawPlayerHand() {
    playerHand.forEach((domino, index) => {
        drawDomino(domino, 10 + index * 70, canvas.height - 130);
    });
}

// Função para desenhar a mão do oponente
function drawOpponentHand() {
    opponentHand.forEach((domino, index) => {
        drawDomino(domino, 10 + index * 70, 10, true);
    });
}

// Função para desenhar o tabuleiro
function drawBoard() {
    board.forEach((domino, index) => {
        drawDomino(domino, boardX + index * 70, boardY - 60);
    });
}

// Função para desenhar o estoque de peças
function drawStock() {
    stock.forEach((domino, index) => {
        drawDomino(domino, canvas.width - 70, 10 + index * 130, true);
    });
}

// Função para iniciar o jogo
function startGame() {
    // Reseta as variáveis do jogo
    playerHand = [];
    opponentHand = [];
    board = [];
    stock = [...dominoImages];
    moves = 0;
    updateInfoPanel();

    // Distribui as peças para o jogador e o oponente
    for (let i = 0; i < 7; i++) {
        let randomIndex = Math.floor(Math.random() * stock.length);
        playerHand.push(stock.splice(randomIndex, 1)[0]);
        randomIndex = Math.floor(Math.random() * stock.length);
        opponentHand.push(stock.splice(randomIndex, 1)[0]);
    }

    // Desenha a mão do jogador, do oponente, o tabuleiro e o estoque
    drawPlayerHand();
    drawOpponentHand();
    drawBoard();
    drawStock();
}

// Função para atualizar o painel de informações
function updateInfoPanel() {
    document.getElementById('moves').textContent = `Movimentos: ${moves}`;
    document.getElementById('gamesPlayed').textContent = `Partidas Jogadas: ${gamesPlayed}`;
}

// Função para verificar se a jogada é válida
function isValidMove(domino, position) {
    if (board.length === 0) return true;
    const firstValue = board[0].value[0];
    const lastValue = board[board.length - 1].value[1];
    if (position === 'left') {
        return domino.value.includes(firstValue);
    } else if (position === 'right') {
        return domino.value.includes(lastValue);
    }
    return false;
}

// Função para jogar uma peça de dominó
function playDomino(domino, position) {
    if (!isValidMove(domino, position)) return false;
    if (board.length === 0) {
        board.push(domino);
    } else {
        const firstValue = board[0].value[0];
        const lastValue = board[board.length - 1].value[1];
        if (position === 'left' && domino.value.includes(firstValue)) {
            board.unshift(domino);
            boardX -= 70; // Move o tabuleiro para a esquerda
        } else if (position === 'right' && domino.value.includes(lastValue)) {
            board.push(domino);
        } else {
            return false;
        }
    }
    return true;
}

// Função para o jogador automático
function opponentPlay() {
    for (let i = 0; i < opponentHand.length; i++) {
        if (playDomino(opponentHand[i], 'left') || playDomino(opponentHand[i], 'right')) {
            opponentHand.splice(i, 1);
            moves++;
            updateInfoPanel();
            break;
        }
    }
}

// Função para selecionar uma peça de dominó
canvas.addEventListener('mousedown', (event) => {
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
    playerHand.forEach((domino, index) => {
        const dominoX = 10 + index * 70;
        const dominoY = canvas.height - 130;
        if (x >= dominoX && x <= dominoX + 60 && y >= dominoY && y <= dominoY + 120) {
            selectedDomino = domino;
            offsetX = x - dominoX;
            offsetY = y - dominoY;
            isDragging = true;
        }
    });
});

canvas.addEventListener('mousemove', (event) => {
    if (isDragging && selectedDomino) {
        const x = event.clientX - canvas.offsetLeft - offsetX;
        const y = event.clientY - canvas.offsetTop - offsetY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayerHand();
        drawOpponentHand();
        drawBoard();
        drawStock();
        drawDomino(selectedDomino, x, y);
    }
});

canvas.addEventListener('mouseup', (event) => {
    if (isDragging && selectedDomino) {
        const x = event.clientX - canvas.offsetLeft;
        const y = event.clientY - canvas.offsetTop;
        if (x < canvas.width / 2) {
            if (playDomino(selectedDomino, 'left')) {
                playerHand = playerHand.filter(d => d !== selectedDomino);
                moves++;
                updateInfoPanel();
                opponentPlay();
            }
        } else {
            if (playDomino(selectedDomino, 'right')) {
                playerHand = playerHand.filter(d => d !== selectedDomino);
                moves++;
                updateInfoPanel();
                opponentPlay();
            }
        }
        selectedDomino = null;
        isDragging = false;
    }
});

// Função para comprar uma peça do estoque
canvas.addEventListener('dblclick', (event) => {
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
    if (x >= canvas.width - 70 && x <= canvas.width && y >= 10 && y <= 10 + stock.length * 130) {
        const index = Math.floor((y - 10) / 130);
        if (stock[index]) {
            playerHand.push(stock.splice(index, 1)[0]);
            drawPlayerHand();
            drawStock();
        }
    }
});

// Função principal do jogo
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayerHand();
    drawOpponentHand();
    drawBoard();
    drawStock();
    requestAnimationFrame(gameLoop);
}

// Inicia o jogo e o loop principal
startGame();
gameLoop();
