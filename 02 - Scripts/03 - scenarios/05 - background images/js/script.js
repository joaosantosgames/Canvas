// Obtém o elemento canvas e o contexto de renderização 2D
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Carrega as imagens de fundo e objetos
const background = new Image();
background.src = 'images/background.jpg';
const tree = new Image();
tree.src = 'images/tree.png';
const platform = new Image();
platform.src = 'images/platform.png';
const bush = new Image();
bush.src = 'images/bush.png';

// Função para desenhar o cenário
function drawBackground() {
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
}

// Função para desenhar chão
function drawPlatform(x, y) {
    context.drawImage(platform, 0, 520, canvas.width, 100); // Desenha o chão na posição (x, y) com tamanho largura tela e altura 100.
}

// Função para desenhar árvores
function drawTree(x, y) {
    context.drawImage(tree, x, 425, 140, 100); // Desenha a árvore na posição (x, y) com tamanho 140x100
}

// Função para desenhar arbustos
function drawBush(x, y) {
    context.drawImage(bush, x, 495, 50, 30); // Desenha o arbusto na posição (x, y) com tamanho 50x30
}

// Função para desenhar o cenário completo
function draw() {
    drawBackground(); // Desenha o plano de fundo

    // Desenha o chão na posição inferior da tela
    drawPlatform(80, 400);

    // Desenha árvores em várias posições
    drawTree(100, 400);
    drawTree(300, 350);
    drawTree(500, 400);

    // Desenha arbustos em várias posições
    drawBush(50, 500);
    drawBush(480, 450);
    drawBush(690, 500);
}

// Função para carregar o cenário após todas as imagens serem carregadas
window.onload = function() {
    draw();
};
