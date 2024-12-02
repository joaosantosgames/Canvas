// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const healthBar = document.getElementById('health-bar');
const manaBar = document.getElementById('mana-bar');
const expBar = document.getElementById('exp-bar');
const goldDisplay = document.getElementById('gold');

// Configurações iniciais do jogo
let playerHealth = 100; // Vida inicial do jogador
let playerMana = 100;   // Mana inicial do jogador
let playerExp = 0;      // Experiência inicial do jogador
let playerGold = 0;     // Ouro inicial do jogador

// Função para desenhar os elementos no canvas principal
function drawGame() {
    // Limpar o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar o personagem, inimigos, cenário, etc.
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a barra de vida
    healthBar.style.width = playerHealth + '%';

    // Atualizar a barra de mana
    manaBar.style.width = playerMana + '%';

    // Atualizar a barra de experiência
    expBar.style.width = playerExp + '%';

    // Atualizar a quantidade de ouro
    goldDisplay.textContent = playerGold;
}

// Função principal do loop do jogo
function gameLoop() {
    drawGame();  // Desenhar o jogo
    updateHUD(); // Atualizar a HUD

    requestAnimationFrame(gameLoop); // Chamar novamente o loop do jogo
}

// Simulação de ganho de experiência
function gainExperience(amount) {
    playerExp += amount;
    if (playerExp > 100) {
        playerExp = 100; // Limitar a experiência a 100%
    }
    updateHUD();
}

// Simulação de ganho de ouro
function gainGold(amount) {
    playerGold += amount;
    updateHUD();
}

// Simulação de uso de mana
function useMana(amount) {
    playerMana -= amount;
    if (playerMana < 0) {
        playerMana = 0; // Garantir que a mana não fique negativa
    }
    updateHUD();
}

// Simulação de perda de vida
function loseHealth(damage) {
    playerHealth -= damage;
    if (playerHealth < 0) {
        playerHealth = 0; // Garantir que a vida não fique negativa
    }
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
