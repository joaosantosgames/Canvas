const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Função para desenhar o fundo do deserto gelado
function drawBackground() {
    // Céu
    context.fillStyle = '#87CEEB'; // Azul claro para o céu
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Solo de neve
    context.fillStyle = '#FFFFFF'; // Branco para o solo de neve
    context.fillRect(0, canvas.height - 100, canvas.width, 100);
}

// Função para desenhar uma montanha
function drawMountain(x, y) {
    context.fillStyle = '#A9A9A9'; // Cinza para a montanha
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 100, y - 150);
    context.lineTo(x + 200, y);
    context.closePath();
    context.fill();

    // Cume da montanha coberto de neve
    context.fillStyle = '#FFFFFF'; // Branco para a neve
    context.beginPath();
    context.moveTo(x + 100, y - 150);
    context.lineTo(x + 130, y - 120);
    context.lineTo(x + 70, y - 120);
    context.closePath();
    context.fill();
}

// Função para desenhar uma árvore nevada
function drawSnowyTree(x, y) {
    context.fillStyle = '#8B4513'; // Marrom para o tronco
    context.fillRect(x, y - 50, 20, 50);

    context.fillStyle = '#228B22'; // Verde para as folhas
    context.beginPath();
    context.moveTo(x - 30, y - 50);
    context.lineTo(x + 10, y - 100);
    context.lineTo(x + 50, y - 50);
    context.closePath();
    context.fill();

    context.fillStyle = '#FFFFFF'; // Branco para a neve nas folhas
    context.beginPath();
    context.moveTo(x - 20, y - 60);
    context.lineTo(x + 10, y - 90);
    context.lineTo(x + 40, y - 60);
    context.closePath();
    context.fill();
}

// Função para desenhar um lago congelado
function drawFrozenLake() {
    context.fillStyle = '#1E90FF'; // Azul para o lago
    context.beginPath();
    context.ellipse(400, canvas.height - 50, 100, 50, 0, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = 'rgba(255, 255, 255, 0.7)'; // Branco semi-transparente para o gelo
    context.beginPath();
    context.ellipse(400, canvas.height - 50, 80, 40, 0, 0, Math.PI * 2);
    context.fill();
}

// Função para desenhar um iglu
function drawIgloo(x, y) {
    context.fillStyle = '#FFFFFF'; // Branco para o iglu
    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI, true);
    context.fill();
    context.fillRect(x - 40, y, 80, 30);

    context.fillStyle = '#DCDCDC'; // Cinza claro para a entrada
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI, true);
    context.fill();
}

function draw() {
    drawBackground();          // Desenha o fundo (céu e solo de neve)
    drawMountain(100, canvas.height - 100);    // Desenha montanha 1
    drawMountain(500, canvas.height - 100);    // Desenha montanha 2
    drawSnowyTree(200, canvas.height - 100);   // Desenha árvore nevada 1
    drawSnowyTree(600, canvas.height - 100);   // Desenha árvore nevada 2
    drawFrozenLake();          // Desenha um lago congelado
    drawIgloo(600, canvas.height - 100);       // Desenha um iglu
}

draw();
