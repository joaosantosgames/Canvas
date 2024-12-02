// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const healthBar = document.getElementById('health-bar');
const ammoBar = document.getElementById('ammo-bar');
const weaponDisplay = document.getElementById('weapon');
const goldDisplay = document.getElementById('gold');

// Configurações iniciais do jogo
let playerHealth = 100; // Vida inicial do jogador
let playerAmmo = 100;   // Munição inicial do jogador
let playerWeapon = 'Pistola'; // Arma inicial do jogador
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

    // Atualizar a barra de munição
    ammoBar.style.width = playerAmmo + '%';

    // Atualizar a arma equipada
    weaponDisplay.textContent = playerWeapon;

    // Atualizar a quantidade de ouro
    goldDisplay.textContent = playerGold;
}

// Função principal do loop do jogo
function gameLoop() {
    drawGame();  // Desenhar o jogo
    updateHUD(); // Atualizar a HUD

    requestAnimationFrame(gameLoop); // Chamar novamente o loop do jogo
}

// Simulação de perda de vida
function loseHealth(damage) {
    playerHealth -= damage;
    if (playerHealth < 0) {
        playerHealth = 0; // Garantir que a vida não fique negativa
    }
    updateHUD();
}

// Simulação de uso de munição
function useAmmo(amount) {
    playerAmmo -= amount;
    if (playerAmmo < 0) {
        playerAmmo = 0; // Garantir que a munição não fique negativa
    }
    updateHUD();
}

// Simulação de mudança de arma
function changeWeapon(newWeapon) {
    playerWeapon = newWeapon;
    updateHUD();
}

// Simulação de ganho de ouro
function gainGold(amount) {
    playerGold += amount;
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
