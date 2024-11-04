const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const squareSize = 50;
        let squareX = (canvas.width - squareSize) / 2;
        let squareY = (canvas.height - squareSize) / 2;

        const keys = {
            w: false,
            a: false,
            s: false,
            d: false,
        };

        function drawSquare() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'orange';
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
        }

        function updatePosition() {
            if (keys.w && squareY > 0) squareY -= 5;
            if (keys.a && squareX > 0) squareX -= 5;
            if (keys.s && squareY < canvas.height - squareSize) squareY += 5;
            if (keys.d && squareX < canvas.width - squareSize) squareX += 5;
            drawSquare();
        }

        window.addEventListener('keydown', (e) => {
            keys[e.key.toLowerCase()] = true;
        });

        window.addEventListener('keyup', (e) => {
            keys[e.key.toLowerCase()] = false;
        });

        function gameLoop() {
            updatePosition();
            requestAnimationFrame(gameLoop);
        }

        drawSquare();
        gameLoop()