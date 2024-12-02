// Selecionar elementos do DOM
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const speedDisplay = document.getElementById('speed');
const timeDisplay = document.getElementById('time');
const lapsDisplay = document.getElementById('laps');
const positionDisplay = document.getElementById('position');

// Configurações iniciais do jogo
let speed = 0; // Velocidade inicial do jogador
let gameTime = 0; // Tempo de jogo em segundos
let laps = 1; // Voltas completadas
let position = 1; // Posição do jogador na corrida

// Função para desenhar os elementos no canvas principal
function drawGame() {
    // Limpar o canvas principal
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aqui você adicionaria o código para desenhar o carro, a pista, obstáculos, etc.
}

// Função para atualizar a HUD
function updateHUD() {
    // Atualizar a velocidade
    speedDisplay.textContent = speed;

    // Atualizar o tempo de jogo
    timeDisplay.textContent = gameTime;

    // Atualizar a contagem de voltas
    lapsDisplay.textContent = `${laps}/3`;

    // Atualizar a posição do jogador
    positionDisplay.textContent = position;
}

// Função principal do loop do jogo
function gameLoop() {
    gameTime++; // Incrementar o tempo de jogo a cada segundo
    drawGame(); // Desenhar o jogo
    updateHUD(); // Atualizar a HUD

    setTimeout(gameLoop, 1000); // Chamar novamente o loop do jogo após 1 segundo
}

// Simulação de ganho de velocidade
function increaseSpeed(amount) {
    speed += amount;
    updateHUD();
}

// Simulação de ganho de voltas
function completeLap() {
    if (laps < 3) {
        laps++;
    }
    updateHUD();
}

// Simulação de mudança de posição
function changePosition(newPosition) {
    position = newPosition;
    updateHUD();
}

// Iniciar o loop do jogo
gameLoop();
