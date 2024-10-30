const canvas = document.getElementById('canvas'); // Obtém o elemento canvas pelo ID
const ctx = canvas.getContext('2d'); // Obtém o contexto 2D do canvas para desenhar
let x = canvas.width / 2; // Define a posição inicial x do retângulo no meio do canvas
let y = canvas.height / 2; // Define a posição inicial y do retângulo no meio do canvas
const speed = 5; // Define a velocidade de movimento do retângulo

// Desenha o retângulo inicial
function drawRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.fillStyle = 'green'; // Define a cor de preenchimento como verde
    ctx.fillRect(x, y, 50, 50); // Desenha o retângulo no canvas
}

drawRect(); // Desenha o retângulo ao carregar a página

// Controle por teclas de seta
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            y -= speed; // Move o retângulo para cima
            break;
        case 'ArrowDown':
            y += speed; // Move o retângulo para baixo
            break;
        case 'ArrowLeft':
            x -= speed; // Move o retângulo para a esquerda
            break;
        case 'ArrowRight':
            x += speed; // Move o retângulo para a direita
            break;
    }
    drawRect(); // Redesenha o retângulo na nova posição
});

// Controle por mouse
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect(); // Obtém a posição do canvas na tela
    x = e.clientX - rect.left - 25; // Calcula a nova posição x do retângulo baseada na posição do mouse
    y = e.clientY - rect.top - 25; // Calcula a nova posição y do retângulo baseada na posição do mouse
    drawRect(); // Redesenha o retângulo na nova posição
});

// Controle por Gamepad
window.addEventListener("gamepadconnected", (event) => {
    console.log("Gamepad conectado:", event.gamepad); // Loga a conexão do gamepad
    updateGamepadStatus(); // Inicia a atualização do status do gamepad
});

function updateGamepadStatus() {
    const gamepads = navigator.getGamepads(); // Obtém a lista de gamepads conectados
    for (let i = 0; i < gamepads.length; i++) {
        const gp = gamepads[i];
        if (gp) {
            const xAxis = gp.axes[0]; // Obtém o valor do eixo x do gamepad
            const yAxis = gp.axes[1]; // Obtém o valor do eixo y do gamepad
            x += xAxis * speed; // Atualiza a posição x do retângulo baseado na entrada do gamepad
            y += yAxis * speed; // Atualiza a posição y do retângulo baseado na entrada do gamepad
            drawRect(); // Redesenha o retângulo na nova posição
        }
    }
    requestAnimationFrame(updateGamepadStatus); // Requer a próxima atualização do status do gamepad
}
