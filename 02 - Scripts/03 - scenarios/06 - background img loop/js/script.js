var myGamePiece;
var myBackground;

// Função que inicializa o jogo
function startGame() {
    // Cria o componente da peça do jogo e o plano de fundo
    myGamePiece = new component(30, 30, "images/smiley.gif", 10, 120, "image");
    myBackground = new component(656, 270, "images/citymarket.jpg", 0, 0, "background");
    // Inicia a área do jogo
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    // Função que configura a área do jogo
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        // Define um intervalo para atualizar a área do jogo a cada 20ms
        this.interval = setInterval(updateGameArea, 20);
    },
    // Função que limpa a área do jogo
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    // Função que para a atualização da área do jogo
    stop : function() {
        clearInterval(this.interval);
    }
}

// Função que cria componentes do jogo
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            if (type == "background") {
                ctx.drawImage(this.image, 
                    this.x + this.width, 
                    this.y,
                    this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }    
}

// Função que atualiza a área do jogo
function updateGameArea() {
    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}

// Função que move a peça do jogo
function move(dir) {
    myGamePiece.image.src = "images/angry.gif";
    if (dir == "up") {myGamePiece.speedY = -1; }
    if (dir == "down") {myGamePiece.speedY = 1; }
    if (dir == "left") {myGamePiece.speedX = -1; }
    if (dir == "right") {myGamePiece.speedX = 1; }
}

// Função que para o movimento da peça do jogo
function clearmove() {
    myGamePiece.image.src = "images/smiley.gif";
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

// Função que altera o plano de fundo conforme a escolha do usuário
function changeBackground() {
    var select = document.getElementById("backgroundSelect");
    var selectedValue = select.options[select.selectedIndex].value;
    myBackground.image.src = "images/" + selectedValue;
}
