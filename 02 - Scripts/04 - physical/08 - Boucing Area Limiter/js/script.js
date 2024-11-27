// Definição das variáveis dos objetos principais do jogo
var myGamePieces = [];

// Função para iniciar o jogo
function startGame() {
    myGamePieces.push(new component(30, 30, "red", 80, 75, 0.6));
    myGamePieces.push(new component(30, 30, "blue", 130, 75, 0.8));
    myGamePieces.push(new component(30, 30, "green", 180, 75, 0.4));
    myGamePieces.push(new component(30, 30, "yellow", 230, 75, 1.0));
    myGameArea.start();
}

// Objeto que representa a área do jogo
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// Função construtora para componentes do jogo
function component(width, height, color, x, y, bounce) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 1; // Inicializa com velocidade horizontal
    this.speedY = 1; // Inicializa com velocidade vertical
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = bounce;

    // Atualiza a aparência do componente
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    // Calcula a nova posição do componente
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBoundaries();
    };

    // Verifica se o componente atingiu alguma borda do canvas
    this.hitBoundaries = function() {
        let rockbottom = myGameArea.canvas.height - this.height;
        let rightBoundary = myGameArea.canvas.width - this.width;
        let leftBoundary = 0;

        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        } else if (this.y < 0) {
            this.y = 0;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }

        if (this.x > rightBoundary) {
            this.x = rightBoundary;
            this.speedX = -(this.speedX * this.bounce);
        } else if (this.x < leftBoundary) {
            this.x = leftBoundary;
            this.speedX = -(this.speedX * this.bounce);
        }
    };
}

// Função para atualizar a área do jogo
function updateGameArea() {
    myGameArea.clear();
    for (let i = 0; i < myGamePieces.length; i++) {
        myGamePieces[i].newPos();
        myGamePieces[i].update();
    }
}
