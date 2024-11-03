// Obtém o elemento canvas e o contexto de renderização 2D
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Define a classe para os componentes
class Component {
    constructor(x, y, size, speed, angle, angleSpeed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
        this.angleSpeed = angleSpeed;
    }

    // Método para desenhar o componente no canvas
    draw() {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.fillStyle = '#FF0000'; // Cor do componente
        context.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        context.restore();
    }

    // Método para atualizar a posição e a rotação do componente
    update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.angle += this.angleSpeed;

        // Verifica colisões com as bordas do canvas e ajusta a direção se necessário
        if (this.x + this.size / 2 > canvas.width || this.x - this.size / 2 < 0) {
            this.angle = Math.PI - this.angle;
        }
        if (this.y + this.size / 2 > canvas.height || this.y - this.size / 2 < 0) {
            this.angle = -this.angle;
        }

        this.draw(); // Desenha o componente na nova posição
    }
}

// Cria múltiplos componentes com diferentes propriedades
const components = [
    new Component(100, 100, 50, 2, 0, 0.01),
    new Component(200, 200, 50, 1.5, Math.PI / 4, 0.02),
    new Component(300, 300, 50, 3, Math.PI / 2, 0.015),
    new Component(400, 400, 50, 2.5, (3 * Math.PI) / 4, 0.01),
    new Component(500, 500, 50, 2, Math.PI, 0.02)
];

// Função principal do jogo que atualiza os componentes em intervalos regulares
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Atualiza a posição e a rotação de cada componente
    components.forEach(component => component.update());

    requestAnimationFrame(gameLoop); // Solicita a próxima frame de animação
}

// Inicia o loop do jogo
gameLoop();
