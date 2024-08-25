# Componentes

Recurso component em Jogos com JavaScript e Canvas
O que é? O recurso component refere-se a uma função ou classe que define e gerencia os elementos visuais e interativos de um jogo. Esses componentes podem ser personagens, obstáculos, itens colecionáveis, entre outros.

## Para que serve?

1. Modularidade e Organização: Utilizar componentes permite que o código do jogo seja mais modular e organizado. Cada componente pode ser desenvolvido e testado separadamente, facilitando a manutenção e a adição de novos elementos ao jogo.
2. Reutilização de Código: Componentes podem ser reutilizados em diferentes partes do jogo ou até mesmo em outros projetos. Isso economiza tempo e esforço no desenvolvimento.
3. Facilidade de Atualização: Com componentes, é mais fácil atualizar as propriedades e o comportamento dos elementos do jogo. Por exemplo, mudar a cor, tamanho ou posição de um componente pode ser feito de forma centralizada.
4. Interatividade e Dinamismo: Componentes podem incluir lógica para interagir com outros elementos do jogo, detectar colisões, responder a eventos do usuário (como cliques ou toques), e muito mais.

Como Implementar? Para implementar um componente em um jogo usando JavaScript e Canvas, você geralmente define uma função ou classe que cria e gerencia o elemento. Aqui está um exemplo básico:

``` javascript
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
```

### Neste exemplo:

Propriedades: width, height, color, x, y definem as dimensões, cor e posição do componente.
Método update: Desenha o componente no canvas usando as propriedades definidas.

### Exemplo de Uso:

``` javascript
var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.update();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
```

Neste exemplo, o componente myGamePiece é criado e desenhado no canvas quando o jogo é iniciado.


Este script cria um jogo simples usando HTML, CSS e JavaScript. Ele desenha um quadrado vermelho em um canvas quando a página é carregada.

## Estrutura do HTML

```html
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
<script>
```

* DOCTYPE e Meta Tags: Define o tipo de documento e configura a viewport para responsividade.
* Estilo do Canvas: Define a borda e a cor de fundo do canvas.
* Evento onload: Chama a função startGame() quando a página é carregada.

## JavaScript
### Variáveis Globais

``` javascript
var myGamePiece;
```

* myGamePiece: Variável que armazenará o componente do jogo (o quadrado vermelho).

### Função startGame
``` javascript
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}
```

* startGame: Inicia a área do jogo e cria um novo componente (quadrado vermelho) com largura, altura, cor e posição inicial especificadas.

### Objeto myGameArea
``` javascript
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
```

* myGameArea: Objeto que gerencia o canvas do jogo.
  * canvas: Cria um elemento canvas.
  * start: Define as dimensões do canvas, obtém o contexto 2D e insere o canvas no corpo do documento.

### Função component
``` javascript
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
```

* component: Função construtora que cria um novo componente (quadrado vermelho) com as propriedades especificadas.
* ctx: Obtém o contexto 2D do canvas.
* fillRect: Desenha o quadrado no canvas com as dimensões e cor especificadas.

### HTML Final
``` html
</script>

<p>Adicionamos um componente ao nosso jogo, um quadrado vermelho!</p>

</body>
</html>
```

* Mensagem: Exibe uma mensagem indicando que um componente foi adicionado ao jogo.

## Resumo
Este script cria um canvas e desenha um quadrado vermelho nele quando a página é carregada. 

Ele utiliza JavaScript para gerenciar o canvas e desenhar o componente, proporcionando uma base simples para o desenvolvimento de jogos.

O recurso component é essencial para criar elementos visuais e interativos em jogos desenvolvidos com JavaScript e Canvas. Ele facilita a modularidade, reutilização de código, atualização de elementos e a criação de uma experiência de jogo dinâmica e interativa.