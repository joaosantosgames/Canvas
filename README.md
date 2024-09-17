# Documentação de HTML5, CSS3, JavaScript e Canvas

## Descrição
Este documento fornece uma visão geral das tecnologias HTML5, CSS3, JavaScript e Canvas, que são amplamente utilizadas no desenvolvimento de jogos para a web. Cada seção inclui links para a documentação oficial e recursos adicionais para ajudar desenvolvedores iniciantes a começar.

## HTML5
HTML5 é a quinta versão da linguagem de marcação HTML. Ele introduz novos elementos e atributos que permitem uma estruturação mais semântica e funcional das páginas web.

### Recursos
- **Documentação Oficial**: MDN Web Docs - HTML5
- **Tutoriais**: W3Schools - HTML5

### Principais Elementos para Jogos
- `<canvas>`: Elemento usado para desenhar gráficos via JavaScript.
- `<audio>` e `<video>`: Elementos para incorporar mídia.

## CSS3
CSS3 é a terceira versão da linguagem de folhas de estilo em cascata. Ele traz novos recursos para estilização avançada e animações.

### Recursos
- **Documentação Oficial**: MDN Web Docs - CSS
- **Tutoriais**: W3Schools - CSS3

### Principais Recursos para Jogos
- **Animações**: Propriedades como `@keyframes`, `animation`, `transition`.
- **Flexbox e Grid**: Layouts responsivos e flexíveis.

## JavaScript
JavaScript é uma linguagem de programação essencial para a web, permitindo a criação de conteúdo dinâmico e interativo.

### Recursos
- **Documentação Oficial**: MDN Web Docs - JavaScript
- **Tutoriais**: W3Schools - JavaScript

### Principais Conceitos para Jogos
- **Manipulação do DOM**: Interação com elementos HTML.
- **Eventos**: Captura de interações do usuário.
- **Lógica de Jogo**: Controle de fluxo, detecção de colisão, etc.

# Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos diretamente no navegador. Ele é amplamente utilizado para criar jogos, animações, gráficos de dados e outras visualizações interativas.

## Recursos Básicos

### Recursos
- **Documentação Oficial**: [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- **Tutoriais**: [MDN Web Docs - Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

### Principais Funcionalidades
- **Desenho de Formas**: Linhas, retângulos, círculos, etc.
- **Manipulação de Imagens**: Carregamento e desenho de imagens.
- **Animações**: Criação de animações quadro a quadro.

## Por Que é uma Boa Base para Iniciantes
Desenvolver jogos usando HTML5, CSS3, JavaScript e Canvas é uma excelente introdução ao desenvolvimento web por várias razões:
- **Simplicidade**: As tecnologias são acessíveis e bem documentadas.
- **Versatilidade**: Permitem criar uma ampla variedade de jogos e aplicações interativas.
- **Comunidade**: Grande quantidade de recursos e suporte disponível online.
- **Expansibilidade**: Fácil integração com outras tecnologias e bibliotecas.

## Recursos Adicionais
- [Criando um Jogo 2D com Canvas](https://www.devmedia.com.br/jogos-em-html5-criando-um-jogo-2d-com-canvas/32186) - Um artigo detalhado sobre a criação de jogos com Canvas[^1^][5].
- [Desenvolvimento de Jogos com JavaScript](https://www.youtube.com/watch?v=z3r8up9cz3w) - Tutorial em vídeo sobre como criar um jogo simples com JavaScript e HTML5[^2^][2].

### 1. Configuração do Canvas

Para começar a usar o canvas, você precisa configurar o elemento no HTML e obter o contexto de renderização no JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas Básico</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="800" height="600"></canvas>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
    </script>
</body>
</html>
```

### 2.Desenho de Formas
Você pode desenhar formas básicas como retângulos, círculos e linhas.

``` javascript
// Desenhar um retângulo
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 100);

// Desenhar um círculo
ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

// Desenhar uma linha
ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineTo(500, 150);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();
```

### 3.Animação Básica
Para criar animações, você pode usar a função requestAnimationFrame.

``` javascript
let x = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 50, 50, 50);
    x += 1;
    requestAnimationFrame(animate);
}

animate();
```

## Recursos Intermediários
### 1. Manipulação de Imagens
Você pode carregar e desenhar imagens no canvas.

``` javascript
const img = new Image();
img.src = 'path/to/image.png';
img.onload = () => {
    ctx.drawImage(img, 100, 100);
};
```

### 2.Detecção de Colisões
A detecção de colisões é essencial para jogos. Aqui está um exemplo simples de detecção de colisão entre dois retângulos.

``` javascript
function detectCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}
```

### 3.Controle de Movimento
Você pode adicionar controle de movimento usando eventos de teclado.

``` javascript
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            player.y -= 5;
            break;
        case 'ArrowDown':
            player.y += 5;
            break;
        case 'ArrowLeft':
            player.x -= 5;
            break;
        case 'ArrowRight':
            player.x += 5;
            break;
    }
});
```

## Recursos Avançados
### 1. Física de Jogo
Para simular física realista, você pode usar bibliotecas como Matter.js ou criar suas próprias funções de física.

``` javascript
// Exemplo básico de gravidade
let gravity = 0.5;
let velocity = 0;

function applyGravity() {
    velocity += gravity;
    player.y += velocity;
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        velocity = 0;
    }
}
```

### 2. Som
Adicionar som ao seu jogo pode melhorar a experiência do usuário.

``` javascript
const sound = new Audio('path/to/sound.mp3');
sound.play();
```

### 3. Inteligência Artificial
Implementar IA pode tornar seu jogo mais desafiador e interessante.

``` javascript
function moveEnemyTowardsPlayer(enemy, player) {
    if (enemy.x < player.x) {
        enemy.x += enemy.speed;
    } else {
        enemy.x -= enemy.speed;
    }
    if (enemy.y < player.y) {
        enemy.y += enemy.speed;
    } else {
        enemy.y -= enemy.speed;
    }
}
```

## Conclusão
O canvas em JavaScript é uma ferramenta poderosa para criar jogos e outras visualizações interativas. Com uma combinação de recursos básicos, intermediários e avançados, você pode criar experiências ricas e envolventes diretamente no navegador.

Para mais informações, consulte a documentação do Canvas API.

[^3^][1]: MDN Web Docs - HTML5
[^2^][2]: MDN Web Docs - CSS
[^4^][3]: MDN Web Docs - JavaScript
[^5^][4]: MDN Web Docs - Canvas API
[^1^][5]: DevMedia - Jogos em HTML5: Criando um jogo 2D com Canvas
