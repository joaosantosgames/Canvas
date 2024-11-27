// Seleciona o elemento canvas e define o contexto 2D
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Define as propriedades dos objetos
var obj1 = { x: 100, y: canvas.height / 2, radius: 20, dx: 2, dy: 0 }; // Objeto à esquerda
var obj2 = { x: canvas.width - 100, y: canvas.height / 2, radius: 20, dx: -2, dy: 0 }; // Objeto à direita

// Função que desenha um objeto no canvas
function drawObject(obj) {
    ctx.beginPath(); // Inicia um novo caminho de desenho
    ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2); // Desenha um círculo
    ctx.fillStyle = "#0095DD"; // Define a cor do objeto
    ctx.fill(); // Preenche o círculo com a cor definida
    ctx.closePath(); // Fecha o caminho de desenho
}

// Função que verifica colisão entre dois objetos
function checkCollision(obj1, obj2) {
    var dx = obj1.x - obj2.x;
    var dy = obj1.y - obj2.y;
    var distance = Math.sqrt(dx * dx + dy * dy); // Calcula a distância entre os objetos
    return distance < obj1.radius + obj2.radius; // Verifica se a distância é menor que a soma dos raios (colisão)
}

// Função que atualiza a posição dos objetos e verifica colisões
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas a cada frame
    drawObject(obj1); // Desenha o primeiro objeto na nova posição
    drawObject(obj2); // Desenha o segundo objeto na nova posição

    // Verifica colisão entre os dois objetos
    if (checkCollision(obj1, obj2)) {
        obj1.dx = 0; // Para o movimento do primeiro objeto
        obj2.dx = 0; // Para o movimento do segundo objeto
    }

    // Atualiza a posição dos objetos
    obj1.x += obj1.dx;
    obj2.x += obj2.dx;

    requestAnimationFrame(update); // Chama a função update novamente para o próximo frame
}

// Inicia a animação
update();
