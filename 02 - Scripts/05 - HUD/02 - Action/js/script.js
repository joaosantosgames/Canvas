// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const healthBar = document.getElementById('health-bar');
const ammoCount = document.getElementById('ammo-count');
const minimapCanvas = document.getElementById('minimap');
const minimapCtx = minimapCanvas.getContext('2d');

// Configurações iniciais do jogo
let playerHealth = 100; // Vida inicial do jogador
let playerAmmo = 10;    // Munição inicial do jogador
let minimapData = [];   // Dados fictícios do mini-mapa

// Função para desenhar os elementos no canvas principal
function drawGame() {
    // Limpar o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar o jogador, inimigos, obstáculos, etc.
}

// Função para desenhar o mini-mapa
function drawMinimap() {
    // Limpar o mini-mapa
    minimapCtx.clearRect(0, 0, minimapCanvas.width, minimapCanvas.height);

    // Exemplo de desenho de um mini-mapa (dados fictícios)
    minimapCtx.fillStyle = 'blue';
    minimapCtx.fillRect(10, 10, 30, 30);  // Desenhar posição do jogador
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a barra de vida
    healthBar.style.width = playerHealth + '%';

    // Atualizar a contagem de munição
    ammoCount.textContent = playerAmmo;
}

// Função principal do loop do jogo
function gameLoop() {
    drawGame();       // Desenhar o jogo
    drawMinimap();    // Desenhar o mini-mapa
    updateHUD();      // Atualizar a HUD

    requestAnimationFrame(gameLoop);  // Chamar novamente o loop do jogo
}

// Simulação de coleta de munição
function collectAmmo() {
    playerAmmo++;
    updateHUD();
}

// Simulação de perda de vida
function loseHealth() {
    playerHealth = Math.max(0, playerHealth - 10);  // Reduzir vida, mas não deixar ir abaixo de 0
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
