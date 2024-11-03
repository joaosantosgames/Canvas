// Obtém o elemento canvas e o contexto de renderização 2D
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Define as variáveis de posição inicial e de movimento do componente
let x = canvas.width / 2;
let y = canvas.height / 2;
const size = 50; // Tamanho do componente
let angle = 0; // Ângulo de rotação em radianos
const speed = 2; // Velocidade de movimento

// Função para desenhar o componente no canvas
function drawComponent() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Salva o estado atual do contexto
    context.save();

    // Move para a posição do componente e rotaciona o contexto
    context.translate(x, y);
    context.rotate(angle);

    // Desenha o componente (um retângulo) no novo sistema de coordenadas
    context.fillStyle = '#FF0000'; // Cor do componente
    context.fillRect(-size / 2, -size / 2, size, size); // Desenha o retângulo

    // Restaura o estado original do contexto
    context.restore();
}

// Função para atualizar a posição e a rotação do componente
function updatePosition() {
    // Move para frente
    x += speed * Math.cos(angle);
    y += speed * Math.sin(angle);

    // Rotaciona levemente a cada atualização para simular controle automático
    angle += 0.01;

    // Verifica colisões com as bordas do canvas e ajusta a direção se necessário
    if (x + size / 2 > canvas.width || x - size / 2 < 0 || y + size / 2 > canvas.height || y - size / 2 < 0) {
        angle += Math.PI / 2; // Gira 90 graus ao colidir
    }

    drawComponent(); // Redesenha o componente na nova posição
}

// Função principal do jogo que atualiza o componente em intervalos regulares
function gameLoop() {
    updatePosition(); // Atualiza a posição e a rotação do componente
    requestAnimationFrame(gameLoop); // Solicita a próxima frame de animação
}

// Inicia o loop do jogo
gameLoop();
