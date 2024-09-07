document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const rows = 8;
    const cols = 8;
    const squares = [];
    let redScore = 0;
    let blueScore = 0;

    // Cria o tabuleiro
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
                if (row < 3) {
                    const piece = document.createElement('div');
                    piece.classList.add('piece', 'blue');
                    square.appendChild(piece);
                } else if (row > 4) {
                    const piece = document.createElement('div');
                    piece.classList.add('piece', 'red');
                    square.appendChild(piece);
                }
            }
            board.appendChild(square);
            squares.push(square);
        }
    }

    // Adiciona mecânicas de movimentação e captura
    let selectedPiece = null;
    let selectedSquare = null;
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (selectedPiece) {
                // Verifica se o movimento é válido
                if (isValidMove(selectedSquare, square)) {
                    // Move a peça para a nova posição
                    square.appendChild(selectedPiece);
                    selectedPiece = null;
                    selectedSquare = null;

                    // Verifica se a peça deve ser promovida a dama
                    promotePiece(square);

                    // Atualiza a pontuação
                    updateScore();

                    // Turno do computador
                    computerMove();
                }
            } else if (square.childElementCount > 0 && square.firstChild.classList.contains('red')) {
                // Seleciona a peça do jogador
                selectedPiece = square.removeChild(square.firstChild);
                selectedSquare = square;
            }
        });
    });

    // Função para verificar se o movimento é válido
    function isValidMove(fromSquare, toSquare) {
        const fromIndex = squares.indexOf(fromSquare);
        const toIndex = squares.indexOf(toSquare);
        const fromRow = Math.floor(fromIndex / cols);
        const fromCol = fromIndex % cols;
        const toRow = Math.floor(toIndex / cols);
        const toCol = toIndex % cols;

        // Verifica se o movimento é diagonal
        if (Math.abs(fromRow - toRow) === 1 && Math.abs(fromCol - toCol) === 1) {
            return true;
        }

        // Verifica se o movimento é uma captura
        if (Math.abs(fromRow - toRow) === 2 && Math.abs(fromCol - toCol) === 2) {
            const middleRow = (fromRow + toRow) / 2;
            const middleCol = (fromCol + toCol) / 2;
            const middleSquare = squares[middleRow * cols + middleCol];
            if (middleSquare.childElementCount > 0 && middleSquare.firstChild.classList.contains('piece') &&
                middleSquare.firstChild.classList[1] !== selectedPiece.classList[1]) {
                // Remove a peça capturada
                middleSquare.removeChild(middleSquare.firstChild);
                return true;
            }
        }

        return false;
    }

    // Função para promover a peça a dama
    function promotePiece(square) {
        const piece = square.firstChild;
        const row = Math.floor(squares.indexOf(square) / cols);
        if (piece.classList.contains('red') && row === 0) {
            piece.classList.add('king');
        } else if (piece.classList.contains('blue') && row === 7) {
            piece.classList.add('king');
        }
    }

    // Função para atualizar a pontuação
    function updateScore() {
        redScore = document.querySelectorAll('.black .piece.red').length;
        blueScore = document.querySelectorAll('.black .piece.blue').length;
        console.log(`Red: ${redScore}, Blue: ${blueScore}`);
    }

    // Função para o movimento do computador
    function computerMove() {
        const bluePieces = document.querySelectorAll('.piece.blue');
        for (let piece of bluePieces) {
            const parentSquare = piece.parentElement;
            const parentIndex = squares.indexOf(parentSquare);
            const parentRow = Math.floor(parentIndex / cols);
            const parentCol = parentIndex % cols;

            // Tenta mover a peça para frente
            const targetRow = parentRow + 1;
            const targetCols = [parentCol - 1, parentCol + 1];
            for (let targetCol of targetCols) {
                if (targetRow < rows && targetCol >= 0 && targetCol < cols) {
                    const targetSquare = squares[targetRow * cols + targetCol];
                    if (targetSquare.childElementCount === 0) {
                        targetSquare.appendChild(piece);
                        promotePiece(targetSquare);
                        updateScore();
                        return;
                    }
                }
            }
        }
    }
});
