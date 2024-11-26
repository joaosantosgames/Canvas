// Array de componentes do jogo
var gamePieces = [];

// Função para iniciar o jogo
function startGame() {
    // Criando componentes com diferentes gravidades
    gamePieces.push(new component(30, 30, "Mercúrio", "gray", 30, 50, 0.38)); // Mercúrio
    gamePieces.push(new component(30, 30, "Vênus", "yellow", 80, 50, 0.91)); // Vênus
    gamePieces.push(new component(30, 30, "Terra", "blue", 130, 50, 1.00)); // Terra
    gamePieces.push(new component(30, 30, "Marte", "red", 180, 50, 0.38)); // Marte
    gamePieces.push(new component(30, 30, "Júpiter", "orange", 230, 50, 2.34)); // Júpiter
    gamePieces.push(new component(30, 30, "Saturno", "gold", 280, 50, 1.06)); // Saturno
    gamePieces.push(new component(30, 30, "Urano", "lightblue", 330, 50, 0.92)); // Urano
    gamePieces.push(new component(30, 30, "Netuno", "darkblue", 380, 50, 1.19)); // Netuno
    myGameArea.start();
}

// Objeto para gerenciar a área do jogo
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 440;
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
function component(width, height, name, color, x, y, gravity) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.x = x;
    this.y = y;
    this.color = color;
    this.gravity = gravity;
    this.gravitySpeed = 0;

    // Desenha o componente na tela
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "black";
        ctx.font = "10px Arial";
        ctx.fillText(this.name, this.x, this.y - 10);
    };

    // Atualiza a posição do componente, aplicando gravidade
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
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
    for (var i = 0; i < gamePieces.length; i++) {
        gamePieces[i].newPos();
        gamePieces[i].update();
    }
}
