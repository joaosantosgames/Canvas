const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Função para desenhar o fundo do deserto
function drawBackground() {
    // Céu
    context.fillStyle = '#87CEEB';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Solo do deserto
    context.fillStyle = '#DEB887';
    context.fillRect(0, canvas.height - 100, canvas.width, 100);
}

// Função para desenhar o sol
function drawSun() {
    context.fillStyle = '#FFD700';
    context.beginPath();
    context.arc(700, 80, 40, 0, Math.PI * 2);
    context.fill();
}

// Função para desenhar uma cactos
function drawCactus(x, y) {
    context.fillStyle = '#228B22'; // Verde para o cacto
    // Corpo principal
    context.fillRect(x, y - 60, 20, 60);

    // Braço esquerdo
    context.fillRect(x - 10, y - 40, 10, 20);

    // Braço direito
    context.fillRect(x + 20, y - 40, 10, 20);
}

// Função para desenhar uma duna de areia
function drawDune(x, y) {
    context.fillStyle = '#FFD700';
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 100, y);
    context.lineTo(x + 50, y - 40);
    context.closePath();
    context.fill();
}

// Função para desenhar uma rocha
function drawRock(x, y) {
    context.fillStyle = '#A9A9A9';
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fill();
}

// Função para desenhar o cenário completo
function draw() {
    drawBackground();      // Desenha o fundo (céu e solo do deserto)
    drawSun();             // Desenha o sol

    // Desenha cactos em várias posições
    drawCactus(60, canvas.height - 100);
    drawCactus(340, canvas.height - 100);
    drawCactus(600, canvas.height - 100);

    // Desenha dunas de areia em várias posições
    drawDune(100, canvas.height - 100);
    drawDune(400, canvas.height - 100);

    // Desenha rochas em várias posições
    drawRock(300, canvas.height - 80);
    drawRock(700, canvas.height - 80);
}

draw();
