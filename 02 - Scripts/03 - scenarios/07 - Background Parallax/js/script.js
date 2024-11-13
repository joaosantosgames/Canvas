var canvas;
var ctx;
var layers = [];
var speeds = [0.5, 1, 1.5, 2];  // Velocidades diferentes para as camadas de fundo

// Função que inicializa o jogo
function startGame() {
    canvas = document.getElementById("parallaxCanvas");
    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Carrega as camadas de fundo
    layers.push(new BackgroundLayer("images/background1.png", speeds[0]));
    layers.push(new BackgroundLayer("images/background2.png", speeds[1]));
    layers.push(new BackgroundLayer("images/background3.png", speeds[2]));
    //layers.push(new BackgroundLayer("images/background2.jpg", speeds[3]));

    // Começa a atualizar a tela
    setInterval(updateGameArea, 20);
}

// Classe que define uma camada de fundo
class BackgroundLayer {
    constructor(imageSrc, speed) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = 0;  // Posição horizontal inicial
        this.speed = speed;  // Velocidade da camada
    }

    // Função que desenha a imagem no canvas
    draw() {
        ctx.drawImage(this.image, this.x, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, this.x + canvas.width, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, this.x, 0, canvas.width, 0, 1028, 52);
    }

    // Função que atualiza a posição da camada
    update() {
        this.x -= this.speed;
        if (this.x <= -canvas.width) {
            this.x = 0;
        }
    }
}

// Função que atualiza a área do jogo
function updateGameArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    layers.forEach(layer => {
        layer.update();
        layer.draw();
    });
}
