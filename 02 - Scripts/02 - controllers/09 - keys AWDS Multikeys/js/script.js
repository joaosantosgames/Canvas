var myGamePiece; // Variável para armazenar a peça do jogo

function startGame() {
    myGameArea.start(); // Inicializa a área do jogo
    myGamePiece = new component(30, 30, "red", 10, 120); // Cria a peça do jogo com tamanho e posição especificados
}

var myGameArea = {
    canvas: document.createElement("canvas"), // Cria um novo elemento canvas
    start: function() {
        this.canvas.width = 480; // Define a largura do canvas
        this.canvas.height = 270; // Define a altura do canvas
        this.context = this.canvas.getContext("2d"); // Obtém o contexto 2D do canvas
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); // Insere o canvas no corpo do documento
        this.interval = setInterval(updateGameArea, 20); // Define um intervalo para atualizar a área do jogo
        // Adiciona eventos de pressionar tecla
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []); // Inicializa o array de teclas pressionadas, se necessário
            myGameArea.keys[e.keyCode] = (e.type == "keydown"); // Atualiza o estado da tecla pressionada
        });
        // Adiciona eventos de soltar tecla
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown"); // Atualiza o estado da tecla solta
        });
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa a área do canvas
    }
};

function component(width, height, color, x, y) {
    this.width = width; // Define a largura do componente
    this.height = height; // Define a altura do componente
    this.speed = 0; // Inicializa a velocidade do componente
    this.angle = 0; // Inicializa o ângulo do componente
    this.moveAngle = 0; // Inicializa o ângulo de movimento do componente
    this.x = x; // Define a posição x do componente
    this.y = y; // Define a posição y do componente

    // Método para atualizar a posição do componente
    this.update = function() {
        ctx = myGameArea.context; // Obtém o contexto do canvas
        ctx.save(); // Salva o estado atual do contexto
        ctx.translate(this.x, this.y); // Move a origem do canvas para a posição do componente
        ctx.rotate(this.angle); // Rotaciona o canvas de acordo com o ângulo do componente
        ctx.fillStyle = color; // Define a cor de preenchimento do componente
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height); // Desenha o componente no canvas
        ctx.restore(); // Restaura o estado original do contexto
    };

    // Método para calcular a nova posição do componente
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180; // Atualiza o ângulo do componente
        this.x += this.speed * Math.sin(this.angle); // Atualiza a posição x do componente
        this.y -= this.speed * Math.cos(this.angle); // Atualiza a posição y do componente
    };
}

// Função para atualizar a área do jogo a cada frame
function updateGameArea() {
    myGameArea.clear(); // Limpa a área do canvas
    myGamePiece.moveAngle = 0; // Reseta o ângulo de movimento do componente
    myGamePiece.speed = 0; // Reseta a velocidade do componente

    // Verifica as teclas pressionadas e ajusta a velocidade e o ângulo de movimento do componente
    if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.moveAngle = -1; } // Tecla 'A' para rotação à esquerda
    if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.moveAngle = 1; } // Tecla 'D' para rotação à direita
    if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speed = 1; } // Tecla 'W' para mover para frente
    if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speed = -1; } // Tecla 'S' para mover para trás

    myGamePiece.newPos(); // Calcula a nova posição do componente
    myGamePiece.update(); // Desenha o componente na nova posição
}
