const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const squareSize = 50;
        let orangeSquare = { x: 50, y: (canvas.height - squareSize) / 2, color: 'orange' };
        let blueSquare = { x: canvas.width - 100, y: (canvas.height - squareSize) / 2, color: 'blue' };

        const keys = {
            w: false,
            a: false,
            s: false,
            d: false,
            ArrowUp: false,
            ArrowLeft: false,
            ArrowDown: false,
            ArrowRight: false,
        };

        function drawSquare(square) {
            ctx.fillStyle = square.color;
            ctx.fillRect(square.x, square.y, squareSize, squareSize);
        }

        function updatePosition() {
            if (keys.w && orangeSquare.y > 0) orangeSquare.y -= 5;
            if (keys.a && orangeSquare.x > 0) orangeSquare.x -= 5;
            if (keys.s && orangeSquare.y < canvas.height - squareSize) orangeSquare.y += 5;
            if (keys.d && orangeSquare.x < canvas.width / 2 - squareSize) orangeSquare.x += 5;

            if (keys.ArrowUp && blueSquare.y > 0) blueSquare.y -= 5;
            if (keys.ArrowLeft && blueSquare.x > canvas.width / 2) blueSquare.x -= 5;
            if (keys.ArrowDown && blueSquare.y < canvas.height - squareSize) blueSquare.y += 5;
            if (keys.ArrowRight && blueSquare.x < canvas.width - squareSize) blueSquare.x += 5;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawSquare(orangeSquare);
            drawSquare(blueSquare);
        }

        window.addEventListener('keydown', (e) => {
            keys[e.key] = true;
        });

        window.addEventListener('keyup', (e) => {
            keys[e.key] = false;
        });

        function gameLoop() {
            updatePosition();
            requestAnimationFrame(gameLoop);
        }

        drawSquare(orangeSquare);
        drawSquare(blueSquare);
        gameLoop();