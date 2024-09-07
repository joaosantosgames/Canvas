// Seleciona o canvas e o contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurações do jogo
let rows = 10;
let cols = 10;
let numMines = 15;
let board = [];
let revealed = [];
let flagged = [];
let score = 0;
let timer = 0;
let interval;
let highScores = JSON.parse(localStorage.getItem('highScores')) || { easy: [], medium: [], hard: [] };

// Carrega as imagens de bandeira e bomba
const flagImg = new Image();
flagImg.src = 'flag.png'; // Substitua pelo caminho correto da imagem de bandeira
const bombImg = new Image();
bombImg.src = 'bomb.png'; // Substitua pelo caminho correto da imagem de bomba

// Carrega os sons
const clickSound = document.getElementById('clickSound');
const explosionSound = document.getElementById('explosionSound');

// Inicializa o jogo
function initGame(difficulty) {
    clearInterval(interval);
    switch (difficulty) {
        case 'easy':
            rows = cols = 10;
            numMines = 10;
            break;
        case 'medium':
            rows = cols = 15;
            numMines = 30;
            break;
        case 'hard':
            rows = cols = 20;
            numMines = 50;
            break;
    }
    board = createBoard(rows, cols, numMines);
    revealed = Array(rows).fill().map(() => Array(cols).fill(false));
    flagged = Array(rows).fill().map(() => Array(cols).fill(false));
    score = 0;
    timer = 0;
    document.getElementById('score').innerText = `Pontuação: ${score}`;
    document.getElementById('timer').innerText = `Tempo: ${timer}s`;
    interval = setInterval(() => {
        timer++;
        document.getElementById('timer').innerText = `Tempo: ${timer}s`;
    }, 1000);
    drawBoard();
}

// Cria o tabuleiro com minas
function createBoard(rows, cols, numMines) {
    let board = Array(rows).fill().map(() => Array(cols).fill(0));
    let minesPlaced = 0;

    while (minesPlaced < numMines) {
        let row = Math.floor(Math.random() * rows);
        let col = Math.floor(Math.random() * cols);
        if (board[row][col] === 0) {
            board[row][col] = 'M';
            minesPlaced++;
            updateNumbers(board, row, col);
        }
    }
    return board;
}

// Atualiza os números ao redor das minas
function updateNumbers(board, row, col) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let newRow = row + i;
            let newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] !== 'M') {
                board[newRow][newCol]++;
            }
        }
    }
}

// Desenha o tabuleiro
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            drawCell(row, col);
        }
    }
}

// Desenha uma célula
function drawCell(row, col) {
    let x = col * (400 / cols);
    let y = row * (400 / rows);
    ctx.strokeRect(x, y, 400 / cols, 400 / rows);
    if (revealed[row][col]) {
        if (board[row][col] === 'M') {
            ctx.drawImage(bombImg, x, y, 400 / cols, 400 / rows);
        } else {
            ctx.fillStyle = 'lightgrey';
            ctx.fillRect(x, y, 400 / cols, 400 / rows);
            if (board[row][col] > 0) {
                ctx.fillStyle = 'black';
                ctx.fillText(board[row][col], x + (400 / cols) / 2.5, y + (400 / rows) / 1.5);
            }
        }
    } else if (flagged[row][col]) {
        ctx.drawImage(flagImg, x, y, 400 / cols, 400 / rows);
    }
}

// Lida com cliques do mouse
canvas.addEventListener('click', (event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let col = Math.floor(x / (400 / cols));
    let row = Math.floor(y / (400 / rows));
    revealCell(row, col);
    clickSound.play();
});

// Lida com cliques do botão direito do mouse para bandeiras
canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let col = Math.floor(x / (400 / cols));
    let row = Math.floor(y / (400 / rows));
    toggleFlag(row, col);
});

// Alterna a bandeira em uma célula
function toggleFlag(row, col) {
    if (!revealed[row][col]) {
        flagged[row][col] = !flagged[row][col];
        drawBoard();
    }
}

// Revela uma célula
function revealCell(row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols && !revealed[row][col] && !flagged[row][col]) {
        revealed[row][col] = true;
        if (board[row][col] === 'M') {
            explosionSound.play();
            alert('Game Over!');
            clearInterval(interval);
            saveHighScore();
            initGame('easy');
        } else {
            score++;
            document.getElementById('score').innerText = `Pontuação: ${score}`;
            if (board[row][col] === 0) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        revealCell(row + i, col + j);
                    }
                }
            }
            drawBoard();
        }
    }
}

// Salva a pontuação no localStorage
function saveHighScore() {
    let difficulty = rows === 10 ? 'easy' : rows === 15 ? 'medium' : 'hard';
    highScores[difficulty].push({ score, time: timer });
    highScores[difficulty].sort((a, b) => a.time - b.time);
    highScores[difficulty] = highScores[difficulty].slice(0, 5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    displayHighScores();
}

// Exibe as melhores pontuações
function displayHighScores() {
    let highScoresDiv = document.getElementById('highScores');
    highScoresDiv.innerHTML = 'Melhores Pontuações:<br>';
    for (let difficulty in highScores) {
        highScoresDiv.innerHTML += `<strong>${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}:</strong><br>`;
        highScores[difficulty].forEach((score, index) => {
            highScoresDiv.innerHTML += `${index + 1}. Pontuação: ${score.score}, Tempo: ${score.time}s<br>`;
        });
    }
}

// Inicializa o jogo ao carregar a página
window.onload = () => {
    displayHighScores();
    initGame('easy');
};
