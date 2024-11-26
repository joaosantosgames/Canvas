// Variável global para o componente do jogo
var myGamePiece;

// Função para iniciar o jogo
function startGame() {
    myGamePiece = new component(30, 30, "red", 80, 75);
    myGameArea.start();
}

// Objeto para gerenciar a área do jogo
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        // Chama a função updateGameArea a cada 20 milissegundos
        this.interval = setInterval(updateGameArea, 20);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// Construtor para os componentes do jogo
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05 / 6;  // Gravidade da Lua, aproximadamente 1/6 da gravidade da Terra
    this.gravitySpeed = 0;

    // Desenha o componente na tela
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    // Atualiza a posição do componente, aplicando gravidade
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    };

    // Impede que o componente saia da tela pelo fundo
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    };
}

// Função para atualizar a área do jogo
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}
