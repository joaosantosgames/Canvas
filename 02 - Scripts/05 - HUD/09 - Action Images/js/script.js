// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const healthDisplay = document.getElementById('health');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

// Configurações iniciais do jogo
let playerHealth = 100; // Vida inicial do jogador
let playerScore = 0; // Pontuação inicial do jogador
let gameTime = 0; // Tempo de jogo em segundos

// Função para desenhar os elementos no canvas principal
function drawGame() {
    // Limpar o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar o jogador, inimigos, cenário, etc.
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a quantidade de vida
    healthDisplay.textContent = playerHealth;

    // Atualizar a pontuação
    scoreDisplay.textContent = playerScore;

    // Atualizar o tempo de jogo
    timeDisplay.textContent = gameTime;
}

// Função principal do loop do jogo
function gameLoop() {
    gameTime++; // Incrementar o tempo de jogo a cada segundo
    drawGame(); // Desenhar o jogo
    updateHUD(); // Atualizar a HUD

    setTimeout(gameLoop, 1000); // Chamar novamente o loop do jogo após 1 segundo
}

// Simulação de perda de vida
function loseHealth(amount) {
    playerHealth = Math.max(0, playerHealth - amount); // Reduzir vida, mas não deixar ir abaixo de 0
    updateHUD();
}

// Simulação de ganho de pontos
function addPoints(points) {
    playerScore += points;
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
