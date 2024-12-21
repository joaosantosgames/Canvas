// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const healthDisplay = document.getElementById('health');
const coinsDisplay = document.getElementById('coins');
const timeDisplay = document.getElementById('time');

// Configurações iniciais do jogo
let playerHealth = 3; // Vida inicial do jogador
let playerCoins = 0; // Moedas iniciais do jogador
let gameTime = 0; // Tempo de jogo em segundos

// Função para desenhar os elementos no canvas principal
function drawGame() {
    // Limpar o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar o personagem, inimigos, cenário, etc.
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a quantidade de vida
    healthDisplay.textContent = playerHealth;

    // Atualizar a quantidade de moedas
    coinsDisplay.textContent = playerCoins;

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
function loseHealth() {
    playerHealth = Math.max(0, playerHealth - 1); // Reduzir vida, mas não deixar ir abaixo de 0
    updateHUD();
}

// Simulação de ganho de moedas
function gainCoins(amount) {
    playerCoins += amount;
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
