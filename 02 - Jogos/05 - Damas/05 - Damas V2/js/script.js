document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const rows = 8;
    const cols = 8;
    const squares = [];
    let redScore = 0;
    let blackScore = 0;

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
                    piece.classList.add('piece', 'red');
                    square.appendChild(piece);
                } else if (row > 4) {
                    const piece = document.createElement('div');
                    piece.classList.add('piece', 'black-piece');
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
                }
            } else if (square.childElementCount > 0) {
                // Seleciona a peça
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
        if (piece.classList.contains('red') && row === 7) {
            piece.classList.add('king');
        } else if (piece.classList.contains('black-piece') && row === 0) {
            piece.classList.add('king');
        }
    }

    // Função para atualizar a pontuação
    function updateScore() {
        redScore = document.querySelectorAll('.black .piece.red').length;
        blackScore = document.querySelectorAll('.black .piece.black-piece').length;
        console.log(`Red: ${redScore}, Black: ${blackScore}`);
    }
});
