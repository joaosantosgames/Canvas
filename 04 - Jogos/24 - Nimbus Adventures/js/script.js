window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const gravity = 0.5;
    const jumpStrength = -10;

    const keys = {
        a: false,
        w: false,
        s: false,
        d: false,
        f: false,
    };

    const weapons = [];
    const projectiles = [];

    const weaponTypes = [
        { type: 'knife', color: 'silver' },
        { type: 'sword', color: 'gold' },
        { type: 'bat', color: 'brown' },
        { type: 'bow', color: 'green', projectile: 'arrow' },
        { type: 'crossbow', color: 'blue', projectile: 'bolt' },
        { type: 'slingshot', color: 'black', projectile: 'stone' },
        { type: 'pistol', color: 'gray', projectile: 'bullet' },
        { type: 'rifle', color: 'darkgray', projectile: 'bullet' },
        { type: 'rocketLauncher', color: 'red', projectile: 'rocket' },
        // Adicione mais armas aqui
    ];

    function spawnWeapon() {
        const randomIndex = Math.floor(Math.random() * weaponTypes.length);
        const weaponType = weaponTypes[randomIndex];
        const weapon = {
            type: weaponType.type,
            color: weaponType.color,
            projectile: weaponType.projectile,
            x: Math.random() * (canvas.width - 20),
            y: Math.random() * (canvas.height - 20),
        };
        weapons.push(weapon);
    }

    function spawnEnemiesPeriodically() {
        const maxLevel = 100;
        const level = Math.floor(Math.random() * maxLevel) + 1;
        spawnEnemy(level);
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleKeys();
        updatePlayer();
        updateProjectiles();
        updateEnemies();
        drawPlayer();
        drawProjectiles();
        drawWeapons();
        drawEnemies();
        requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', function(event) {
        if (event.code === 'KeyA') keys.a = true;
        if (event.code === 'KeyW') keys.w = true;
        if (event.code === 'KeyS') keys.s = true;
        if (event.code === 'KeyD') keys.d = true;
        if (event.code === 'KeyF') keys.f = true;
    });

    document.addEventListener('keyup', function(event) {
        if (event.code === 'KeyA') keys.a = false;
        if (event.code === 'KeyW') keys.w = false;
        if (event.code === 'KeyS') keys.s = false;
        if (event.code === 'KeyD') keys.d = false;
        if (event.code === 'KeyF') keys.f = false;
    });

    canvas.addEventListener('mousedown', function(event) {
        if (event.button === 0) {
            shootProjectile();
        }
    });

    // Gerar armas aleatórias na tela
    setInterval(spawnWeapon, 3000);

    // Gerar inimigos aleatórios com níveis variados
    setInterval(spawnEnemiesPeriodically, 5000);

    gameLoop();
}
