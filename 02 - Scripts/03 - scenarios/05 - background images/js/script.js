// Obtém o elemento canvas e o contexto de renderização 2D
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Carrega as imagens de fundo e objetos

// Plano de fundo
const background = new Image();
background.src = 'images/background.jpg';

// Chão
const platform = new Image();
platform.src = 'images/platform.png';

// Arvores
//const tree = new Image();
//tree.src = 'images/tree.png';

//const tree2 = new Image();
//tree2.src = 'images/tree2.png';

//const tree3 = new Image();
//tree3.src = 'images/tree3.png';

const tree4 = new Image();
tree4.src = 'images/tree4.png';

//const tree5 = new Image();
//tree5.src = 'images/tree5.png';

//const tree6 = new Image();
//tree6.src = 'images/tree6.png';

//const tree7 = new Image();
//tree7.src = 'images/tree7.png';

// Arbustos
const bush = new Image();
bush.src = 'images/bush.png';

const bush2 = new Image();
bush2.src = 'images/bush2.png';

const bush3 = new Image();
bush3.src = 'images/bush3.png';

/* Desativados
const bush4 = new Image();
bush4.src = 'images/bush4.png';

const bush5 = new Image();
bush5.src = 'images/bush5.png';

const bush6 = new Image();
bush6.src = 'images/bush6.png';
*/

// Função para desenhar o cenário
function drawBackground() {
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
}

// Função para desenhar chão
function drawPlatform(x, y) {
    context.drawImage(platform, 0, 520, canvas.width, 100); // Desenha o chão na posição (x, y) com tamanho largura tela e altura 100.
}

// Função para desenhar árvores
/*function drawTree(x, y) {
    context.drawImage(tree, x, 425, 100, 100); // Desenha a árvore na posição (x, y) com tamanho 100x100
}*/

/*function drawTree2(x, y) {
    context.drawImage(tree2, x, 425, 100, 100); // Desenha a árvore na posição (x, y) com tamanho 100x100
}*/

/*function drawTree3(x, y) {
    context.drawImage(tree3, x, 385, 100, 138); // Desenha a árvore na posição (x, y) com tamanho 100x100
}*/

function drawTree4(x, y) {
    context.drawImage(tree4, x, 345, 100, 180); // Desenha a árvore na posição (x, y) com tamanho 100x100
}

/*function drawTree5(x, y) {
    context.drawImage(tree5, x, 425, 100, 100); // Desenha a árvore na posição (x, y) com tamanho 100x100
}*/

/*function drawTree6(x, y) {
    context.drawImage(tree6, x, 445, 100, 78); // Desenha a árvore na posição (x, y) com tamanho 100x100
}*/

/*function drawTree7(x, y) {
    context.drawImage(tree7, x, 410, 100, 118); // Desenha a árvore na posição (x, y) com tamanho 100x100
}*/

// Função para desenhar arbustos
function drawBush(x, y) {
    context.drawImage(bush, x, 502, 44, 24); // Desenha o arbusto na posição (x, y) com tamanho 50x30
}

function drawBush2(x, y) {
    context.drawImage(bush2, x, 502, 45, 24); // Desenha o arbusto na posição (x, y) com tamanho 50x30
}

function drawBush3(x, y) {
    context.drawImage(bush3, x, 502, 44, 24); // Desenha o arbusto na posição (x, y) com tamanho 50x30
}

// Função para desenhar o cenário completo
function draw() {
    drawBackground(); // Desenha o plano de fundo

    // Desenha o chão na posição inferior da tela
    drawPlatform(80, 400);

    // Desenha árvores em várias posições
    /*drawTree(0, 400);
    drawTree(200, 350);
    drawTree(450, 400);*/
    
    // Desenha árvores em várias posições
    /*drawTree2(60, 400);
    drawTree2(400, 350);
    drawTree2(500, 400);*/

    // Desenha árvores em várias posições
    /*drawTree3(120, 400);
    drawTree3(600, 350);
    drawTree3(550, 400);*/
    
    // Desenha árvores em várias posições
    drawTree4(0, 400);    
    drawTree4(100, 400);
    drawTree4(200, 400);
    drawTree4(300, 350);
    drawTree4(400, 400);
    drawTree4(500, 400);
    drawTree4(600, 350);
    drawTree4(700, 400);

    // Desenha árvores em várias posições
    drawTree4(50, 400);    
    drawTree4(150, 400);
    drawTree4(250, 400);
    drawTree4(350, 350);
    drawTree4(450, 400);
    drawTree4(550, 400);
    drawTree4(650, 350);    

    // Desenha árvores em várias posições
    /* Arvore Seca desativado */
    // drawTree5(450, 400);
    // drawTree5(200, 350);
    // drawTree5(100, 400);
    
    // Desenha árvores em várias posições
    /*drawTree6(210, 400);
    drawTree6(700, 350);
    drawTree6(370, 400);*/
    
    // Desenha árvores em várias posições
    /*drawTree7(270, 400);
    drawTree7(300, 350);
    drawTree7(370, 400);*/

    // Desenha arbustos em várias posições
    drawBush(0, 500);
    drawBush(100, 450);
    drawBush(200, 500);
    
    // Desenha arbustos em várias posições
    drawBush2(40, 500);
    drawBush2(80, 450);
    drawBush2(120, 500);
    drawBush2(160, 500);
    drawBush2(200, 450);
    drawBush2(240, 500);
    drawBush2(280, 500);
    drawBush2(320, 450);
    drawBush2(360, 500);
    drawBush2(400, 500);
    drawBush2(440, 500);
    drawBush2(480, 500);
    drawBush2(520, 500);
    drawBush2(540, 500);
    drawBush2(580, 500);
    drawBush2(620, 500);
    drawBush2(660, 500);
    drawBush2(700, 500);

    // Desenha arbustos em várias posições    
    drawBush3(740, 500);
}

// Função para carregar o cenário após todas as imagens serem carregadas
window.onload = function() {
    draw();
};
