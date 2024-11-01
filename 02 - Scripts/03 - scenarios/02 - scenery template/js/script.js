const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

function drawBackground() {
    // Céu
    context.fillStyle = '#87CEEB';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Terra
    context.fillStyle = '#228B22';
    context.fillRect(0, canvas.height - 100, canvas.width, 100);
}

function drawClouds() {
    // Função auxiliar para desenhar nuvens
    context.fillStyle = '#FFFFFF';
    context.beginPath();
    context.arc(150, 80, 30, 0, Math.PI * 2);
    context.arc(180, 80, 40, 0, Math.PI * 2);
    context.arc(210, 80, 30, 0, Math.PI * 2);
    context.fill();

    context.beginPath();
    context.arc(350, 50, 20, 0, Math.PI * 2);
    context.arc(380, 50, 30, 0, Math.PI * 2);
    context.arc(410, 50, 20, 0, Math.PI * 2);
    context.fill();
}

function drawTree(x, y) {
    // Desenha uma árvore na posição (x, y) com base no solo
    context.fillStyle = '#8B4513'; // Cor do tronco
    context.fillRect(x, y - 60, 20, 60);

    context.fillStyle = '#006400'; // Cor da copa
    context.beginPath();
    context.arc(x + 10, y - 80, 40, 0, Math.PI * 2);
    context.fill();
}

function drawLake() {
    // Desenha um lago em formato de elipse
    context.fillStyle = '#1E90FF';
    context.beginPath();
    context.ellipse(600, 520, 80, 20, 0, 0, Math.PI * 2);
    context.fill();
}

function drawPlantsAndFlowers() {
    // Desenha plantas e flores modeladas
    context.fillStyle = '#32CD32'; // Verde para as plantas
    context.fillRect(150, canvas.height - 10, 10, 120); // Haste da planta

    context.fillStyle = '#FF69B4'; // Rosa para as flores
    context.beginPath();
    context.arc(155, canvas.height - 12, 10, 0, Math.PI * 2); // Flor
    context.fill();

    // Mais plantas e flores
    context.fillStyle = '#32CD32';
    context.fillRect(250, canvas.height - 12, 10, 90);
    context.fillStyle = '#FFD700'; // Amarelo para as flores
    context.beginPath();
    context.arc(255, canvas.height - 14, 10, 0, Math.PI * 2);
    context.fill();
}

function draw() {
    drawBackground();      // Desenha o fundo (céu e terra)
    drawClouds();          // Desenha nuvens no céu
    drawTree(100, canvas.height - 100);    // Desenha árvore 1
    drawTree(300, canvas.height - 100);    // Desenha árvore 2
    drawTree(500, canvas.height - 100);    // Desenha árvore 3
    drawTree(200, canvas.height - 80);    // Desenha árvore 4
    drawTree(400, canvas.height - 80);    // Desenha árvore 5
    drawTree(700, canvas.height - 80);    // Desenha árvore 6
    drawLake();            // Desenha um lago
    drawPlantsAndFlowers(); // Desenha plantas e flores
}

draw();
