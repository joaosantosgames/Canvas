const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const enemies = [];

function spawnEnemy(level) {
    const enemyType = Math.random() > 0.5 ? 'melee' : 'ranged';
    const enemy = {
        type: enemyType,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 30,
        height: 30,
        color: enemyType === 'melee' ? 'purple' : 'blue',
        hp: 20 + level * 5,
        damage: 2 + level,
        speed: 2 + level * 0.1,
        level: level
    };
    enemies.push(enemy);
}

function updateEnemies() {
    enemies.forEach(enemy => {
        // Simples AI para mover inimigo em direção ao jogador
        if (enemy.type === 'melee') {
            if (enemy.x < player.x) {
                enemy.x += enemy.speed;
            } else {
                enemy.x -= enemy.speed;
            }

            if (enemy.y < player.y) {
                enemy.y += enemy.speed;
            } else {
                enemy.y -= enemy.speed;
            }
        } else if (enemy.type === 'ranged') {
            // Inimigos com armas de fogo atiram projéteis
            if (Math.random() < 0.01) {
                shootEnemyProjectile(enemy);
            }
        }

        // Verificar colisão com jogador
        if (enemy.x < player.x + player.width && enemy.x + enemy.width > player.x &&
            enemy.y < player.y + player.height && enemy.y + enemy.height > player.y) {
            player.hp -= enemy.damage;
            enemy.hp -= player.weapon ? player.weapon.damage : 1;
            if (enemy.hp <= 0) {
                enemies.splice(enemies.indexOf(enemy), 1);
                player.exp += 20 * enemy.level;  // Aumenta a experiência do jogador ao matar inimigos
            }
        }
    });
}

function shootEnemyProjectile(enemy) {
    const projectile = {
        x: enemy.x,
        y: enemy.y,
        dx: (player.x - enemy.x) / 50,
        dy: (player.y - enemy.y) / 50,
        color: 'red',
    };
    projectiles.push(projectile);
}

function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

        // Desenhar barra de HP do inimigo
        drawStatusBar(enemy.x, enemy.y - 10, enemy.hp, `LV${enemy.level}`, 'red');
    });
}
