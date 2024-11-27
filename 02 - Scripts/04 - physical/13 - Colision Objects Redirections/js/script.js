// Seleciona o elemento canvas e define o contexto 2D
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Define as propriedades dos objetos
var obj1 = { x: 100, y: canvas.height / 2, radius: 20, dx: 2, dy: 2 }; // Objeto à esquerda
var obj2 = { x: canvas.width - 100, y: canvas.height / 2, radius: 20, dx: -2, dy: -2 }; // Objeto à direita

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

// Função que resolve a colisão entre dois objetos e altera suas direções
function resolveCollision(obj1, obj2) {
    // Troca as velocidades dos objetos (reflexão)
    var tempDx = obj1.dx;
    var tempDy = obj1.dy;
    obj1.dx = obj2.dx;
    obj1.dy = obj2.dy;
    obj2.dx = tempDx;
    obj2.dy = tempDy;
}

// Função que gera uma nova direção aleatória para um objeto
function randomDirection() {
    var angle = Math.random() * 2 * Math.PI; // Gera um ângulo aleatório
    return {
        dx: Math.cos(angle) * 2, // Calcula a nova velocidade x
        dy: Math.sin(angle) * 2  // Calcula a nova velocidade y
    };
}

// Função que verifica e trata colisões com as bordas do canvas
function checkCanvasCollision(obj) {
    if (obj.x + obj.dx > canvas.width - obj.radius || obj.x + obj.dx < obj.radius) {
        var newDirection = randomDirection();
        obj.dx = newDirection.dx; // Redireciona o objeto
        obj.dy = newDirection.dy; // Redireciona o objeto
    }
    if (obj.y + obj.dy > canvas.height - obj.radius || obj.y + obj.dy < obj.radius) {
        var newDirection = randomDirection();
        obj.dx = newDirection.dx; // Redireciona o objeto
        obj.dy = newDirection.dy; // Redireciona o objeto
    }
}

// Função que atualiza a posição dos objetos e verifica colisões
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas a cada frame
    drawObject(obj1); // Desenha o primeiro objeto na nova posição
    drawObject(obj2); // Desenha o segundo objeto na nova posição

    // Verifica colisão entre os dois objetos
    if (checkCollision(obj1, obj2)) {
        resolveCollision(obj1, obj2); // Altera as direções dos objetos após a colisão
    }

    // Verifica e trata colisões com as bordas do canvas
    checkCanvasCollision(obj1);
    checkCanvasCollision(obj2);

    // Atualiza a posição dos objetos
    obj1.x += obj1.dx;
    obj1.y += obj1.dy;
    obj2.x += obj2.dx;
    obj2.y += obj2.dy;

    requestAnimationFrame(update); // Chama a função update novamente para o próximo frame
}

// Inicia a animação
update();
