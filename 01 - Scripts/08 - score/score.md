# Uso de Pontuação com Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos. Um conceito interessante que pode ser implementado é a pontuação, que pode ser usada em jogos para acompanhar o progresso do jogador e adicionar um elemento competitivo.

## Configuração Básica do Canvas

Primeiro, vamos configurar um canvas básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas com Pontuação</title>
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

No arquivo script.js, configuramos o contexto do canvas e criamos uma variável para armazenar a pontuação:

``` javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;

function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Score: ' + score, 8, 20);
}

function updateScore() {
    score += 1;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();
```

## Explicação do Código
1. Configuração do Canvas: O canvas é configurado com um tamanho de 800x600 pixels e uma borda preta para visualização.
2. Variável de Pontuação: score é uma variável que armazena a pontuação atual do jogador.
3. Função drawScore: Desenha a pontuação no canvas:
   * ctx.font define a fonte do texto.
   * ctx.fillStyle define a cor do texto.
   * ctx.fillText desenha o texto no canvas.
4. Função updateScore: Incrementa a pontuação em 1.
5. Função draw: Limpa o canvas e desenha a pontuação.
6. Função animate: Chama draw em cada frame, criando uma animação contínua.

## Incrementando a Pontuação com Eventos
Podemos incrementar a pontuação com base em eventos, como colisões ou cliques:

``` javascript
canvas.addEventListener('click', () => {
    updateScore();
});
```
## Conclusão
Adicionar pontuação ao canvas com JavaScript permite criar jogos e aplicações interativas que acompanham o progresso do usuário. Este exemplo básico pode ser expandido para incluir diferentes tipos de eventos que afetam a pontuação e outras interações complexas.

Para mais informações, consulte a documentação do Canvas API1.