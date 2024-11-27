// Seleciona o elemento canvas e define o contexto 2D
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Define as propriedades do objeto
var x = canvas.width / 2;  // Posição inicial horizontal (centro do canvas)
var y = canvas.height / 2; // Posição inicial vertical (centro do canvas)
var dx = 2; // Velocidade horizontal
var dy = 2; // Velocidade vertical
var ballRadius = 20; // Raio do objeto (bola)

// Função que desenha a bola no canvas
function drawBall() {
    ctx.beginPath(); // Inicia um novo caminho de desenho
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); // Desenha um círculo
    ctx.fillStyle = "#0095DD"; // Define a cor da bola
    ctx.fill(); // Preenche o círculo com a cor definida
    ctx.closePath(); // Fecha o caminho de desenho
}

// Função que atualiza a posição da bola e verifica colisões
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas a cada frame
    drawBall(); // Desenha a bola na nova posição

    // Verifica colisão com as bordas do canvas
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = 0; // Para o movimento horizontal
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = 0; // Para o movimento vertical
    }

    // Atualiza a posição da bola
    x += dx;
    y += dy;

    requestAnimationFrame(update); // Chama a função update novamente para o próximo frame
}

// Inicia a animação
update();
