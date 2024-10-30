var myGamePieces = []; // Array para armazenar as peças do jogo
var myObstacles = []; // Array para armazenar os obstáculos

function startGame() {
    myGameArea.start(); // Inicializa a área do jogo
    
    // Cria 10 componentes com cores, tamanhos e deformações variadas
    myGamePieces.push(new component(30, 30, "red", 10, 120)); 
    myGamePieces.push(new component(50, 50, "blue", 300, 150)); 
    myGamePieces.push(new component(20, 20, "green", 50, 50)); 
    myGamePieces.push(new component(40, 40, "yellow", 200, 100));
    myGamePieces.push(new component(100, 20, "purple", 100, 200));
    myGamePieces.push(new component(60, 10, "orange", 400, 60));
    myGamePieces.push(new component(10, 60, "pink", 70, 250));
    myGamePieces.push(new component(70, 70, "brown", 200, 20));
    myGamePieces.push(new component(25, 50, "cyan", 350, 100));
    myGamePieces.push(new component(50, 25, "magenta", 250, 200));
    
    // Cria vários obstáculos pretos
    myObstacles.push(new component(10, 200, "black", 300, 50));
    myObstacles.push(new component(20, 150, "black", 100, 100));
    myObstacles.push(new component(15, 100, "black", 200, 150));
    myObstacles.push(new component(25, 120, "black", 50, 180));
    myObstacles.push(new component(30, 90, "black", 400, 60));
    myObstacles.push(new component(35, 110, "black", 150, 200));
    myObstacles.push(new component(40, 140, "black", 350, 100));
    myObstacles.push(new component(45, 170, "black", 250, 50));
    myObstacles.push(new component(50, 130, "black", 10, 30));
    myObstacles.push(new component(55, 80, "black", 320, 220));
}

var myGameArea = {
    canvas: document.createElement("canvas"), // Cria um novo elemento canvas
    start: function() {
        this.canvas.width = 480; // Define a largura do canvas
        this.canvas.height = 270; // Define a altura do canvas
        this.context = this.canvas.getContext("2d"); // Obtém o contexto 2D do canvas
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); // Insere o canvas no corpo do documento
        this.interval = setInterval(updateGameArea, 20); // Define um intervalo para atualizar a área do jogo
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa a área do canvas
    }
};

function component(width, height, color, x, y) {
    this.width = width; // Define a largura do componente
    this.height = height; // Define a altura do componente
    this.x = x; // Define a posição x do componente
    this.y = y; // Define a posição y do componente
    this.update = function() {
        ctx = myGameArea.context; // Obtém o contexto do canvas
        ctx.fillStyle = color; // Define a cor de preenchimento
        ctx.fillRect(this.x, this.y, this.width, this.height); // Desenha o componente no canvas
    }
}

// Função para atualizar a área do jogo a cada frame
function updateGameArea() {
    myGameArea.clear(); // Limpa a área do canvas
    myGamePieces.forEach(function(piece) {
        piece.update(); // Atualiza e desenha cada peça do jogo na nova posição
    });
    myObstacles.forEach(function(obstacle) {
        obstacle.update(); // Atualiza e desenha cada obstáculo na nova posição
    });
}
