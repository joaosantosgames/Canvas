const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    color: 'red',
    dy: 0,
    dx: 0,
    speed: 5,
    onGround: false,
    weapon: null,
    hp: 100,
    mp: 50,
    stamina: 100,
    level: 1,
    exp: 0,
    expToNextLevel: 100
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    if (player.weapon) {
        ctx.fillStyle = player.weapon.color;
        ctx.fillRect(player.x + player.width, player.y + player.height / 2 - 5, 20, 10);
    }

    // Desenhar barras de status
    drawStatusBar(player.x, player.y - 10, player.hp, 'HP', 'green');
    drawStatusBar(player.x, player.y - 20, player.mp, 'MP', 'blue');
    drawStatusBar(player.x, player.y - 30, player.stamina, 'Stamina', 'yellow');
    drawStatusBar(player.x, player.y - 40, player.exp / player.expToNextLevel * 100, 'EXP', 'purple');
}

function drawStatusBar(x, y, value, label, color) {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, 50, 5);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, value / 2, 5);
    ctx.fillStyle = 'white';
    ctx.font = '8px Arial';
    ctx.fillText(label, x, y - 2);
}

function updatePlayer() {
    if (!player.onGround) {
        player.dy += gravity;
    }
    player.y += player.dy;

    player.x += player.dx;

    // Colisão com o chão
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
        player.onGround = true;
    }

    // Limites da tela
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

    // Verificar coleta de armas
    weapons.forEach((weapon, index) => {
        if (player.x < weapon.x + 10 && player.x + player.width > weapon.x &&
            player.y < weapon.y + 10 && player.y + player.height > weapon.y) {
            player.weapon = weapon;
            weapons.splice(index, 1);
        }
    });

    // Verificar nível do jogador
    if (player.exp >= player.expToNextLevel) {
        levelUp();
    }
}

function handleKeys() {
    player.dx = 0;

    if (keys.a) {
        player.dx = -player.speed;
    }
    if (keys.d) {
        player.dx = player.speed;
    }
    if (keys.w) {
        jump();
    }
    // Tecla S para abaixar (implementar abaixamento)
    if (keys.s) {
        // Implementar comportamento de abaixamento
    }
    // Tecla F para bater corpo a corpo
    if (keys.f) {
        attack();
    }
}

function levelUp() {
    player.level += 1;
    player.exp = 0;
    player.expToNextLevel *= 1.5;
    player.hp += 20;
    player.mp += 10;
    player.stamina += 10;
}

function attack() {
    // Implementar comportamento de ataque corpo a corpo
    console.log('Ataque corpo a corpo!');
}

function jump() {
    if (player.onGround) {
        player.dy = jumpStrength;
        player.onGround = false;
    }
}

function shootProjectile() {
    if (player.weapon && player.weapon.projectile) {
        const projectile = {
            x: player.x + player.width,
            y: player.y + player.height / 2,
            dx: 10,
            dy: 0,
            color: 'black',
            type: player.weapon.projectile
        };
        projectiles.push(projectile);
    }
}
