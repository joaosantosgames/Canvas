// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const healthDisplay = document.getElementById('health');
const energyDisplay = document.getElementById('energy');
const weaponDisplay = document.getElementById('weapon');

// Configurações iniciais do jogo
let playerHealth = 100; // Vida inicial do jogador
let playerEnergy = 50;  // Energia inicial do jogador
let playerWeapon = 'Blaster'; // Arma inicial do jogador

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

    // Atualizar a quantidade de energia
    energyDisplay.textContent = playerEnergy;

    // Atualizar a arma equipada
    weaponDisplay.textContent = playerWeapon;
}

// Função principal do loop do jogo
function gameLoop() {
    drawGame();  // Desenhar o jogo
    updateHUD(); // Atualizar a HUD

    requestAnimationFrame(gameLoop); // Chamar novamente o loop do jogo
}

// Simulação de perda de vida
function loseHealth(amount) {
    playerHealth = Math.max(0, playerHealth - amount); // Reduzir vida, mas não deixar ir abaixo de 0
    updateHUD();
}

// Simulação de uso de energia
function useEnergy(amount) {
    playerEnergy = Math.max(0, playerEnergy - amount); // Reduzir energia, mas não deixar ir abaixo de 0
    updateHUD();
}

// Simulação de mudança de arma
function changeWeapon(newWeapon) {
    playerWeapon = newWeapon;
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
