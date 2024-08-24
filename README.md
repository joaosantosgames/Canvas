# Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos diretamente no navegador. Ele é amplamente utilizado para criar jogos, animações, gráficos de dados e outras visualizações interativas.

## Recursos Básicos

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