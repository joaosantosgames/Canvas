document.addEventListener("DOMContentLoaded", () => {
    const movesCount = document.getElementById("moves-count");
    const scoreCount = document.getElementById("score-count");
    const timeCount = document.getElementById("time-count");
    const puzzleBoard = document.getElementById("puzzle-board");

    // Inicializando variáveis de jogo
    let moves = 0;
    let score = 0;
    let time = 0;
    let timerInterval;

    // Função para atualizar a interface com base nas variáveis
    function updateUI() {
        movesCount.textContent = moves;
        scoreCount.textContent = score;
        timeCount.textContent = formatTime(time);
    }

    // Função para formatar o tempo
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    }

    // Função para incrementar movimentos
    function incrementMoves() {
        moves += 1;
        updateUI();
    }

    // Função para ajustar a pontuação
    function adjustScore(points) {
        score += points;
        updateUI();
    }

    // Função para iniciar o cronômetro
    function startTimer() {
        timerInterval = setInterval(() => {
            time += 1;
            updateUI();
        }, 1000);
    }

    // Função para parar o cronômetro
    function stopTimer() {
        clearInterval(timerInterval);
    }

    // Chamada inicial para atualizar a interface
    updateUI();
    startTimer(); // Inicia o cronômetro assim que o jogo começa

    // Exemplo de como adicionar peças ao tabuleiro do puzzle (exemplo simples)
    for (let i = 0; i < 9; i++) {
        const puzzlePiece = document.createElement('div');
        puzzlePiece.textContent = i + 1;
        puzzlePiece.style.width = '60px';
        puzzlePiece.style.height = '60px';
        puzzlePiece.style.margin = '5px';
        puzzlePiece.style.display = 'flex';
        puzzlePiece.style.justifyContent = 'center';
        puzzlePiece.style.alignItems = 'center';
        puzzlePiece.style.backgroundColor = '#e0e0e0';
        puzzlePiece.style.border = '1px solid #333';
        puzzleBoard.appendChild(puzzlePiece);
    }
});
