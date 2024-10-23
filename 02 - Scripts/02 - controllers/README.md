# Uso de Controladores com Canvas em JavaScript

## Introdução

O elemento `<canvas>` do HTML5, combinado com JavaScript, permite a criação de gráficos dinâmicos e interativos. Um uso comum do canvas é em jogos, onde controladores (controllers) como gamepads podem ser utilizados para interagir com os elementos gráficos.

## Configuração Básica do Canvas

Primeiro, vamos configurar um canvas básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas com Controladores</title>
</head>
<body>
    <canvas id="canvas" width="800" height="600"></canvas>
    <script src="script.js"></script>
</body>
</html>
```

No arquivo script.js, configuramos o contexto do canvas:

``` javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Desenhar um retângulo verde
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

## Uso do Gamepad API
Para utilizar controladores, podemos usar a Gamepad API. Esta API permite acessar e usar gamepads conectados ao computador.

## Detectando Conexão de Gamepad
Podemos detectar quando um gamepad é conectado:

``` javascript
window.addEventListener("gamepadconnected", (event) => {
    console.log("Gamepad conectado:", event.gamepad);
});
```

## Detectando Desconexão de Gamepad
Da mesma forma, podemos detectar quando um gamepad é desconectado:

``` javascript
window.addEventListener("gamepaddisconnected", (event) => {
    console.log("Gamepad desconectado:", event.gamepad);
});
```

## Lendo o Estado do Gamepad
Para ler o estado do gamepad, podemos usar a função navigator.getGamepads():

``` javascript
function updateGamepadStatus() {
    const gamepads = navigator.getGamepads();
    for (let i = 0; i < gamepads.length; i++) {
        const gp = gamepads[i];
        if (gp) {
            console.log(`Gamepad ${i}: ${gp.id}`);
            // Exemplo: mover um retângulo com o eixo do gamepad
            const x = gp.axes[0] * 10;
            const y = gp.axes[1] * 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(10 + x, 10 + y, 150, 100);
        }
    }
    requestAnimationFrame(updateGamepadStatus);
}

window.addEventListener("gamepadconnected", () => {
    requestAnimationFrame(updateGamepadStatus);
});
```

## Conclusão
O uso de controladores com canvas em JavaScript permite criar experiências interativas e dinâmicas, especialmente em jogos. A Gamepad API facilita a integração de gamepads, permitindo que os usuários interajam de maneira mais intuitiva com os elementos gráficos.

Para mais informações, consulte a documentação do Canvas API e a documentação do Gamepad API.