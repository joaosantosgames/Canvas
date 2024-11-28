// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const playerNameInput = document.getElementById('player-name');
const lifeBar = document.getElementById('life-bar');
const coinCount = document.getElementById('coin-count');
const timeCount = document.getElementById('time-count');

// Configurações iniciais do jogo
let playerName = 'Jogador';
let playerLife = 100;
let coins = 0;
let gameTime = 0;

// Função para desenhar os elementos no canvas
function draw() {
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar o jogador, inimigos, obstáculos, etc.
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a barra de vida
    lifeBar.style.width = playerLife + '%';

    // Atualizar a contagem de moedas
    coinCount.textContent = coins;

    // Atualizar o tempo de jogo
    timeCount.textContent = gameTime;
}

// Função para simular a coleta de uma moeda
function collectCoin() {
    coins++;
    updateHUD();
}

// Função principal do loop do jogo
function gameLoop() {
    gameTime++;
    updateHUD();
    draw();
    requestAnimationFrame(gameLoop);
}

// Adicionar event listener para o input do nome do jogador
playerNameInput.addEventListener('input', (e) => {
    playerName = e.target.value || 'Jogador'; // Atualizar nome do jogador
});

// Iniciar o loop do jogo
gameLoop();
