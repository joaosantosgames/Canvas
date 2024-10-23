# Bouncing

O recurso de “bouncing” (ou “quicar”) é frequentemente utilizado no desenvolvimento de jogos com JavaScript e Canvas para criar efeitos de movimento realistas e dinâmicos. Aqui está uma descrição detalhada:

Recurso de Bouncing em Jogos com JavaScript e Canvas
O que é? O “bouncing” refere-se ao comportamento de um objeto que, ao colidir com uma superfície, muda sua direção de movimento, simulando um efeito de quique. Esse recurso é amplamente utilizado para adicionar realismo e interatividade aos jogos.

## Para que serve?

* Simulação de Física Realista: O bouncing ajuda a simular a física do mundo real, onde objetos como bolas, personagens ou outros elementos do jogo reagem de maneira natural ao colidir com paredes, chão ou outros obstáculos.
* Interatividade e Desafio: Adicionar bouncing aos elementos do jogo aumenta a interatividade e o desafio, pois os jogadores precisam prever e reagir aos movimentos dos objetos que quicam.
* Efeitos Visuais Dinâmicos: O movimento de quique pode ser usado para criar efeitos visuais interessantes e dinâmicos, tornando o jogo mais atraente e envolvente.

## Como Implementar? 
Para implementar o bouncing em um jogo usando JavaScript e Canvas, você precisa:

* Detectar Colisões: Verificar quando um objeto colide com uma superfície.
* Calcular a Nova Direção: Ajustar a direção do movimento do objeto com base no ângulo de colisão.
* Atualizar a Posição: Atualizar a posição do objeto em cada frame para refletir o movimento de quique.
Aqui está um exemplo simples de como isso pode ser feito:

# HTML e Estilo
``` html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
canvas {
    border:1px solid #d3d3d3;
    background-color: #f1f1f1;
    }
</style>
</head>
<body onload="startGame()">
```

O código HTML define um documento básico com um canvas que será utilizado para desenhar os elementos do jogo.
A tag meta name="viewport" define que o conteúdo da página deve ser exibido em uma largura adequada para o dispositivo.
O style aplica um estilo ao canvas, adicionando uma borda cinza e um fundo claro.

## Script JavaScript

Variável Global myGamePiece

myGamePiece será a variável que armazenará o objeto principal do jogo, um componente que será desenhado na tela.

### Função startGame

``` javascript
function startGame() {
    myGamePiece = new component(30, 30, "red", 80, 75);
    myGameArea.start();
}
```

A função startGame é chamada quando a página carrega (onload).
myGamePiece é inicializado como um novo componente (um retângulo vermelho de 30x30 pixels posicionado em (80, 75)).
A função myGameArea.start() é chamada para iniciar a área de jogo.

### Objeto myGameArea

``` javascript
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);        
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
```

myGameArea é um objeto que gerencia a área de jogo, criando e manipulando o canvas.

A função start cria um canvas de 480x270 pixels, obtém o contexto 2D para desenhar, e insere o canvas no início do body da página.

setInterval(updateGameArea, 20) chama a função updateGameArea a cada 20 milissegundos, atualizando o jogo continuamente.
stop interrompe o jogo, limpando o intervalo.

clear limpa o canvas, removendo qualquer conteúdo desenhado anteriormente.

### Função component

``` javascript
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
}
```

### Função updateGameArea

``` javascript
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}
```

updateGameArea é a função que atualiza continuamente o jogo.
Primeiro, limpa a área de jogo com myGameArea.clear().

Em seguida, chama newPos para calcular a nova posição de myGamePiece, aplicando gravidade e velocidade.

Finalmente, update desenha myGamePiece na nova posição no canvas.

### Descrição do Comportamento de Quicar
Os parágrafos explicam como a propriedade bounce funciona:

    0 = no bouncing. - Sem quicada.
    1 = will bounce all the way back. - Quica completamente de volta à altura original.

# Outra Aplicação Bouncing

``` javascript
// Configurações iniciais
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 2,
    dy: -2
};

// Função para desenhar a bola
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Função para atualizar a posição da bola
function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Detecta colisões com as paredes
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx; // Inverte a direção horizontal
    }
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy; // Inverte a direção vertical
    }
}

// Função principal de desenho
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    updateBallPosition();
    requestAnimationFrame(draw);
}

// Inicia a animação
draw();
```

Este código cria uma bola que se move e quica nas bordas do canvas, simulando o efeito de bouncing.