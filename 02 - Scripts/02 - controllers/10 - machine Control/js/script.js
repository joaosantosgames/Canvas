// Obtém o elemento canvas e o contexto de renderização 2D
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Define as variáveis de posição inicial do componente
let x = canvas.width / 2;
let y = canvas.height / 2;
const size = 50; // Tamanho do quadrado
let dx = 2; // Velocidade horizontal
let dy = 2; // Velocidade vertical

// Função para desenhar o componente no canvas
function drawComponent() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    context.fillStyle = '#FF0000'; // Cor do componente
    context.fillRect(x, y, size, size); // Desenha o componente
}

// Função para atualizar a posição do componente
function updatePosition() {
    // Atualiza a posição do componente com base na velocidade
    x += dx;
    y += dy;

    // Verifica colisões com as bordas do canvas e inverte a direção se necessário
    if (x + size > canvas.width || x < 0) {
        dx = -dx;
    }
    if (y + size > canvas.height || y < 0) {
        dy = -dy;
    }

    drawComponent(); // Redesenha o componente na nova posição
}

// Função principal do jogo que atualiza o componente em intervalos regulares
function gameLoop() {
    updatePosition(); // Atualiza a posição do componente
    requestAnimationFrame(gameLoop); // Solicita a próxima frame de animação
}

// Inicia o loop do jogo
gameLoop();
