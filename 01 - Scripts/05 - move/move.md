# Uso de Movimento com Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos. Um dos aspectos mais interessantes é a capacidade de mover objetos dentro do canvas, criando animações e interações complexas.

## Configuração Básica do Canvas

Primeiro, vamos configurar um canvas básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas com Movimento</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="800" height="600"></canvas>
    <script src="script.js"></script>
</body>
</html>
```

No arquivo script.js, configuramos o contexto do canvas e criamos um objeto que será movido:

``` javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
const speed = 2;

function drawRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);
}

function updatePosition() {
    x += speed;
    if (x + 50 > canvas.width || x < 0) {
        x = 0; // Reinicia a posição quando atinge a borda
    }
    drawRect();
}

function animate() {
    updatePosition();
    requestAnimationFrame(animate);
}

animate();
```

## Explicação do Código
1. Configuração do Canvas: O canvas é configurado com um tamanho de 800x600 pixels e uma borda preta para visualização.
2. Variáveis de Posição e Velocidade: x e y representam a posição inicial do objeto, e speed define a velocidade de movimento.
3. Função drawRect: Desenha um retângulo azul na posição atual.
4. Função updatePosition: Atualiza a posição do retângulo, movendo-o horizontalmente. Se o retângulo atinge a borda do canvas, a posição é reiniciada.
5. Função animate: Chama updatePosition e usa requestAnimationFrame para criar uma animação contínua.

## Movimento com Teclas de Seta
Podemos adicionar controle de movimento usando as teclas de seta:

``` javascript
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            y -= speed;
            break;
        case 'ArrowDown':
            y += speed;
            break;
        case 'ArrowLeft':
            x -= speed;
            break;
        case 'ArrowRight':
            x += speed;
            break;
    }
    drawRect();
});
```

## Conclusão
Mover objetos no canvas com JavaScript permite criar animações e interações dinâmicas. Este exemplo básico pode ser expandido para incluir colisões, múltiplos objetos e outras interações complexas.

Para mais informações, consulte a documentação do Canvas API.