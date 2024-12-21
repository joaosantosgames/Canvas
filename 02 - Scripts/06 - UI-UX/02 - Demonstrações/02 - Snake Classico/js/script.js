document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('start-button');
    const difficultySelect = document.getElementById('difficulty');
    const scoreDisplay = document.getElementById('score');

    let snake = [{ x: 200, y: 200 }];
    let direction = { x: 0, y: 0 };
    let food = { x: 0, y: 0 };
    let score = 0;
    let gameInterval;
    let speed = 200;

    // Função para iniciar o jogo
    function startGame() {
        resetGame();
        setDifficulty();
        placeFood();
        gameInterval = setInterval(gameLoop, speed);
    }

    // Função para resetar o jogo
    function resetGame() {
        snake = [{ x: 200, y: 200 }];
        direction = { x: 0, y: 0 };
        score = 0;
        scoreDisplay.textContent = score;
        clearInterval(gameInterval);
    }

    // Função para definir a dificuldade
    function setDifficulty() {
        const difficulty = difficultySelect.value;
        if (difficulty === 'easy') speed = 200;
        else if (difficulty === 'medium') speed = 100;
        else if (difficulty === 'hard') speed = 50;
    }

    // Função para posicionar a comida
    function placeFood() {
        food.x = Math.floor(Math.random() * 20) * 20;
        food.y = Math.floor(Math.random() * 20) * 20;
    }

    // Função principal do jogo
    function gameLoop() {
        moveSnake();
        if (checkCollision()) {
            alert('Game Over');
            resetGame();
        } else {
            if (checkFoodCollision()) {
                score++;
                scoreDisplay.textContent = score;
                placeFood();
                growSnake();
            }
            drawGame();
        }
    }

    // Função para mover a cobra
    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);
        snake.pop();
    }

    // Função para verificar colisão com a parede ou com o próprio corpo
    function checkCollision() {
        const head = snake[0];
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            return true;
        }
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    // Função para verificar colisão com a comida
    function checkFoodCollision() {
        const head = snake[0];
        return head.x === food.x && head.y === food.y;
    }

    // Função para fazer a cobra crescer
    function growSnake() {
        const tail = { ...snake[snake.length - 1] };
        snake.push(tail);
    }

    // Função para desenhar o jogo
    function drawGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'green';
        snake.forEach(segment => ctx.fillRect(segment.x, segment.y, 20, 20));
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, 20, 20);
    }

    // Event listener para iniciar o jogo
    startButton.addEventListener('click', startGame);

    // Event listener para controlar a cobra
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (direction.y === 0) direction = { x: 0, y: -20 };
                break;
            case 'ArrowDown':
                if (direction.y === 0) direction = { x: 0, y: 20 };
                break;
            case 'ArrowLeft':
                if (direction.x === 0) direction = { x: -20, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x === 0) direction = { x: 20, y: 0 };
                break;
        }
    });
});
