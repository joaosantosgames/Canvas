# Uso de Rotação com Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos. Um conceito interessante que pode ser implementado é a rotação de objetos, que pode ser usada para criar animações e efeitos visuais complexos.

## Configuração Básica do Canvas

Primeiro, vamos configurar um canvas básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas com Rotação</title>
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

No arquivo script.js, configuramos o contexto do canvas e criamos um objeto que será rotacionado:

``` javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let angle = 0;

function drawRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.fillStyle = 'blue';
    ctx.fillRect(-50, -25, 100, 50);
    ctx.restore();
}

function animate() {
    angle += 1;
    drawRect();
    requestAnimationFrame(animate);
}

animate();
```

## Explicação do Código
1. Configuração do Canvas: O canvas é configurado com um tamanho de 800x600 pixels e uma borda preta para visualização.
2. Variável de Ângulo: angle representa o ângulo de rotação em graus.
3. Função drawRect: Desenha um retângulo azul no canvas:
   * ctx.clearRect limpa o canvas.
   * ctx.save salva o estado atual do contexto.
   * ctx.translate move o ponto de origem para o centro do canvas.
   * ctx.rotate aplica a rotação ao contexto.
   * ctx.fillRect desenha o retângulo.
   * ctx.restore restaura o estado do contexto.
4. Função animate: Incrementa o ângulo de rotação e chama drawRect em cada frame, criando uma animação contínua.

## Rotação em Torno de um Ponto Específico
Para rotacionar um objeto em torno de um ponto específico, podemos ajustar a posição de ctx.translate:

``` javascript
function drawRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(200, 200); // Ponto de rotação
    ctx.rotate(angle * Math.PI / 180);
    ctx.fillStyle = 'blue';
    ctx.fillRect(-50, -25, 100, 50);
    ctx.restore();
}
```

## Conclusão
A rotação de objetos no canvas com JavaScript permite criar animações e efeitos visuais dinâmicos. Este exemplo básico pode ser expandido para incluir múltiplos objetos, diferentes ângulos de rotação e outras interações complexas.

Para mais informações, consulte a documentação do Canvas API1.