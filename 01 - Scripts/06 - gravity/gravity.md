# Uso de Gravidade com Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos. Um conceito interessante que pode ser implementado é a gravidade, que simula a força que puxa os objetos para baixo, como na vida real.

## Configuração Básica do Canvas

Primeiro, vamos configurar um canvas básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas com Gravidade</title>
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

No arquivo script.js, configuramos o contexto do canvas e criamos uma bola que será afetada pela gravidade:

``` javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravity = 0.5;
const friction = 0.9;

class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dy = 2; // Velocidade vertical inicial
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction; // Inverte a direção e aplica fricção
        } else {
            this.dy += gravity; // Aplica gravidade
        }
        this.y += this.dy;
        this.draw();
    }
}

const ball = new Ball(canvas.width / 2, canvas.height / 2, 30, 'blue');

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
    requestAnimationFrame(animate);
}

animate();
```

## Explicação do Código
1. Configuração do Canvas: O canvas é configurado com um tamanho de 800x600 pixels e uma borda preta para visualização.
2. Classe Ball: Define uma bola com propriedades de posição (x, y), raio (radius), cor (color) e velocidade vertical (dy).
3. Método draw: Desenha a bola no canvas.
4. Método update: Atualiza a posição da bola:
   * Se a bola atinge o fundo do canvas, a velocidade vertical (dy) é invertida e multiplicada pela fricção para simular a perda de energia.
   * Caso contrário, a gravidade é aplicada, aumentando a velocidade vertical.
5. Função animate: Limpa o canvas e atualiza a posição da bola em cada frame, criando uma animação contínua.

## Conclusão
Adicionar gravidade a elementos no canvas com JavaScript permite criar simulações físicas realistas. Este exemplo básico pode ser expandido para incluir colisões mais complexas, múltiplos objetos e outras forças físicas.

Para mais informações, consulte a documentação do Canvas API.