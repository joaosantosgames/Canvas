# Sistema de Criação de Cenários em Jogos com JavaScript Canvas

Este projeto demonstra como criar cenários em jogos utilizando o elemento `canvas` do HTML5 e JavaScript. Não utilizamos imagens de fundo, como BMP, JPG ou PNG; trabalhamos apenas com elementos primitivos, como retângulos, círculos, e linhas.

## Tecnologias Utilizadas

- HTML5
- JavaScript

## Estrutura do Projeto

    Projeto/ 
    │ 
    ├── index.html 
    |── css/
        └── style.css 
    └── js/
        └── script.js


## index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criação de Cenários</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script src="js/script.js"></script>
</body>
</html>
```

## style.css
``` css
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff;
}

canvas {
    border: 1px solid #000000;
}
```

## script.js
```javascript
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

function drawBackground() {
    // Céu
    context.fillStyle = '#87CEEB';
    context.fillRect(0, 0, canvas.width, canvas.height / 2);

    // Terra
    context.fillStyle = '#228B22';
    context.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

function drawTrees() {
    // Árvore 1
    context.fillStyle = '#8B4513';
    context.fillRect(100, 300, 20, 100); // Tronco
    context.fillStyle = '#006400';
    context.beginPath();
    context.arc(110, 280, 40, 0, Math.PI * 2); // Copa
    context.fill();

    // Árvore 2
    context.fillStyle = '#8B4513';
    context.fillRect(400, 320, 20, 80); // Tronco
    context.fillStyle = '#006400';
    context.beginPath();
    context.arc(410, 300, 40, 0, Math.PI * 2); // Copa
    context.fill();
}

function draw() {
    drawBackground();
    drawTrees();
}

draw();
```

## Executando o Projeto
Para executar este projeto, basta abrir o arquivo index.html no seu navegador. A partir daí, você verá um cenário simples com um céu, uma terra e algumas árvores desenhadas usando elementos primitivos do canvas.

## Contribuindo
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e novas funcionalidades.

## Licença
Este projeto é licenciado sob a MIT License.