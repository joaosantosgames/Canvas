document.addEventListener("DOMContentLoaded", () => {
    const lapsCount = document.getElementById("laps-count");
    const speedCount = document.getElementById("speed-count");
    const timeCount = document.getElementById("time-count");
    const positionCount = document.getElementById("position-count");
    const fuelCount = document.getElementById("fuel-count");

    // Inicializando variáveis de jogo
    let laps = 0;
    let speed = 0;
    let time = 0;
    let position = 1;
    let fuel = 100;

    // Função para atualizar a interface com base nas variáveis
    function updateUI() {
        lapsCount.textContent = `${laps}/3`;
        speedCount.textContent = speed;
        timeCount.textContent = formatTime(time);
        positionCount.textContent = position;
        fuelCount.textContent = `${fuel}%`;
    }

    // Função para formatar o tempo
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    }

    // Exemplo de função para incrementar voltas
    function incrementLaps() {
        if (laps < 3) {
            laps += 1;
        }
        updateUI();
    }

    // Exemplo de função para ajustar a velocidade
    function adjustSpeed(newSpeed) {
        speed = newSpeed;
        updateUI();
    }

    // Exemplo de função para ajustar o tempo
    function incrementTime() {
        time += 1;
        updateUI();
    }

    // Exemplo de função para ajustar a posição
    function changePosition(newPosition) {
        position = newPosition;
        updateUI();
    }

    // Exemplo de função para ajustar o combustível
    function adjustFuel(amount) {
        fuel = Math.max(0, Math.min(100, fuel + amount));
        updateUI();
    }

    // Atualização inicial da interface
    updateUI();

    // Simulação de incrementos
    setInterval(incrementTime, 1000); // Incrementa tempo a cada segundo
});
