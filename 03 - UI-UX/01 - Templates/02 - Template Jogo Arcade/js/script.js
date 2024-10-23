document.addEventListener("DOMContentLoaded", () => {
    const livesCount = document.getElementById("lives-count");
    const scoreCount = document.getElementById("score-count");
    const powerUpsList = document.getElementById("power-ups-list");
    const currentHealth = document.getElementById("current-health");

    // Inicializando variáveis de jogo
    let lives = 3;
    let score = 0;
    let powerUps = [];
    let health = 100; // Saúde inicial

    // Função para atualizar a interface com base nas variáveis
    function updateUI() {
        livesCount.textContent = lives;
        scoreCount.textContent = score;
        powerUpsList.textContent = powerUps.join(", ") || "Nenhum";
        currentHealth.style.width = health + "%";
    }

    // Exemplo de função para incrementar a pontuação
    function incrementScore(points) {
        score += points;
        updateUI();
    }

    // Exemplo de função para decrementar as vidas
    function loseLife() {
        if (lives > 0) {
            lives -= 1;
        }
        updateUI();
    }

    // Exemplo de função para adicionar um power-up
    function addPowerUp(powerUp) {
        powerUps.push(powerUp);
        updateUI();
    }

    // Exemplo de função para ajustar a saúde
    function adjustHealth(amount) {
        health = Math.max(0, Math.min(100, health + amount));
        updateUI();
    }

    // Chamada inicial para atualizar a interface
    updateUI();
});
