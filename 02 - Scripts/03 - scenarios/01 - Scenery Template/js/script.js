const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

function drawBackground() {
    // Céu
    context.fillStyle = '#87CEEB';
    context.fillRect(0, 0, canvas.width, canvas.height / 2);

    // Terra
    context.fillStyle = '#228B22';
    context.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

function drawTrees() {
    // Árvore 1
    context.fillStyle = '#8B4513';
    context.fillRect(100, 300, 20, 100); // Tronco
    context.fillStyle = '#006400';
    context.beginPath();
    context.arc(110, 280, 40, 0, Math.PI * 2); // Copa
    context.fill();

    // Árvore 2
    context.fillStyle = '#8B4513';
    context.fillRect(400, 320, 20, 80); // Tronco
    context.fillStyle = '#006400';
    context.beginPath();
    context.arc(410, 300, 40, 0, Math.PI * 2); // Copa
    context.fill();
}

function draw() {
    drawBackground();
    drawTrees();
}

draw();