// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const player1HealthBar = document.getElementById('player1-health-bar');
const player2HealthBar = document.getElementById('player2-health-bar');
const timeDisplay = document.getElementById('time');

// Configurações iniciais do jogo
let player1Health = 100; // Vida inicial do Player 1
let player2Health = 100; // Vida inicial do Player 2
let gameTime = 99;       // Tempo de jogo em segundos

// Função para desenhar os elementos no canvas principal
function drawGame() {
    // Limpar o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar os personagens, cenários, etc.
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a barra de vida do Player 1
    player1HealthBar.style.width = player1Health + '%';

    // Atualizar a barra de vida do Player 2
    player2HealthBar.style.width = player2Health + '%';

    // Atualizar o tempo de jogo
    timeDisplay.textContent = gameTime;
}

// Função principal do loop do jogo
function gameLoop() {
    drawGame();  // Desenhar o jogo
    updateHUD(); // Atualizar a HUD

    if (gameTime > 0) {
        gameTime--; // Decrementar o tempo de jogo
    }

    setTimeout(gameLoop, 1000); // Chamar novamente o loop do jogo após 1 segundo
}

// Simulação de perda de vida
function loseHealth(player, damage) {
    if (player === 1) {
        player1Health = Math.max(0, player1Health - damage); // Reduzir vida do Player 1, mas não deixar ir abaixo de 0
    } else if (player === 2) {
        player2Health = Math.max(0, player2Health - damage); // Reduzir vida do Player 2, mas não deixar ir abaixo de 0
    }
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
