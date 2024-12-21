document.addEventListener("DOMContentLoaded", () => {
    const healthCount = document.getElementById("health-count");
    const energyCount = document.getElementById("energy-count");
    const staminaCount = document.getElementById("stamina-count");
    const experienceCount = document.getElementById("experience-count");

    // Inicializando variáveis de jogo
    let health = 100;
    let energy = 100;
    let stamina = 100;
    let experience = 0;

    // Função para atualizar a interface com base nas variáveis
    function updateUI() {
        healthCount.textContent = `${health}%`;
        energyCount.textContent = `${energy}%`;
        staminaCount.textContent = `${stamina}%`;
        experienceCount.textContent = `${experience}%`;
    }

    // Funções de exemplo para ajustar valores
    function adjustHealth(amount) {
        health = Math.max(0, Math.min(100, health + amount));
        updateUI();
    }

    function adjustEnergy(amount) {
        energy = Math.max(0, Math.min(100, energy + amount));
        updateUI();
    }

    function adjustStamina(amount) {
        stamina = Math.max(0, Math.min(100, stamina + amount));
        updateUI();
    }

    function gainExperience(amount) {
        experience = Math.min(100, experience + amount);
        updateUI();
    }

    // Chamada inicial para atualizar a interface
    updateUI();
});
