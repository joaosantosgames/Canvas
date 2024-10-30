var myGamePiece; // Variável para armazenar a peça do jogo

function startGame() {
    myGameArea.start(); // Inicializa a área do jogo
    myGamePiece = new component(30, 30, "red", 10, 120); // Cria a peça do jogo com tamanho e posição especificados
}

var myGameArea = {
    canvas : document.createElement("canvas"), // Cria um novo elemento canvas
    start : function() {
        this.canvas.width = 480; // Define a largura do canvas
        this.canvas.height = 270; // Define a altura do canvas
        this.context = this.canvas.getContext("2d"); // Obtém o contexto 2D do canvas
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); // Insere o canvas no corpo do documento
        this.interval = setInterval(updateGameArea, 20); // Define um intervalo para atualizar a área do jogo
        // Adiciona um evento de pressionar tecla
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode; // Captura o código da tecla pressionada
        });
        // Adiciona um evento de soltar tecla
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false; // Reseta a variável da tecla
        });
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa a área do canvas
    }
};

function component(width, height, color, x, y) {
    this.gamearea = myGameArea; // Associa o componente à área do jogo
    this.width = width; // Define a largura do componente
    this.height = height; // Define a altura do componente
    this.speedX = 0; // Define a velocidade horizontal
    this.speedY = 0; // Define a velocidade vertical
    this.x = x; // Define a posição x do componente
    this.y = y; // Define a posição y do componente
    this.update = function() {
        ctx = myGameArea.context; // Obtém o contexto do canvas
        ctx.fillStyle = color; // Define a cor de preenchimento
        ctx.fillRect(this.x, this.y, this.width, this.height); // Desenha o componente no canvas
    };
    this.newPos = function() {
        this.x += this.speedX; // Atualiza a posição x do componente
        this.y += this.speedY; // Atualiza a posição y do componente
    };
}

function updateGameArea() {
    myGameArea.clear(); // Limpa a área do canvas
    myGamePiece.speedX = 0; // Reseta a velocidade horizontal
    myGamePiece.speedY = 0; // Reseta a velocidade vertical
    // Verifica as teclas pressionadas e ajusta a velocidade do componente
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; } // Tecla esquerda
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; } // Tecla direita
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; } // Tecla cima
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; } // Tecla baixo
    myGamePiece.newPos(); // Atualiza a posição do componente
    myGamePiece.update(); // Redesenha o componente na nova posição
}
