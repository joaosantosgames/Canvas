# Aplicação de Recursos de Física em Jogos com JavaScript e Canvas

Este projeto demonstra a aplicação de conceitos de física em jogos utilizando JavaScript e o elemento Canvas. Ele ilustra como diferentes situações físicas podem ser simuladas e implementadas em um ambiente de jogo.

## O que é Física em Jogos?

A física em jogos se refere à simulação de leis físicas do mundo real dentro do ambiente virtual de um jogo. Isso inclui a representação de forças, movimentos, colisões e interações entre objetos. A aplicação de física realista em jogos aumenta a imersão e a credibilidade do jogo, proporcionando uma experiência mais envolvente para o jogador.

## Tecnologias Utilizadas

- JavaScript
- HTML5 Canvas

## Instalação

Para rodar este projeto localmente, basta clonar este repositório e abrir o arquivo `index.html` em um navegador web.

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
## Exemplos de Situações Físicas em Jogos

Aqui estão alguns tipos de situações físicas que podem e devem ser exploradas na criação de jogos:

### 1. Gravidade
A gravidade é uma das forças físicas mais comuns em jogos. Ela pode ser simulada aplicando uma força constante para baixo em todos os objetos no jogo.

``` javascript
function applyGravity(object) {
    const gravity = 0.98; // Valor da gravidade
    object.velocityY += gravity;
    object.y += object.velocityY;
}
```

### 2. Colisões
A detecção de colisões é essencial para garantir que objetos não atravessem uns aos outros de maneira irrealista. Isso pode ser feito verificando a interseção de objetos e respondendo de acordo.

``` javascript
function detectCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}

function handleCollision(obj1, obj2) {
    if (detectCollision(obj1, obj2)) {
        // Reação à colisão (por exemplo, invertendo a direção)
        obj1.velocityY = -obj1.velocityY;
    }
}
```

### 3. Movimento
O movimento pode ser simulado aplicando velocidades a objetos e atualizando suas posições.

``` javascript
function moveObject(object) {
    object.x += object.velocityX;
    object.y += object.velocityY;
}
```

### 4. Forças
Forças, como empurrões ou puxões, podem ser aplicadas a objetos para simular interações complexas.

``` javascript
function applyForce(object, forceX, forceY) {
    object.velocityX += forceX;
    object.velocityY += forceY;
}
```

## Conclusão
A aplicação de física em jogos utilizando JavaScript e Canvas permite criar experiências mais imersivas e realistas. A compreensão e a implementação de conceitos como gravidade, colisões, movimento e forças são fundamentais para o desenvolvimento de jogos envolventes e dinâmicos.

## Referências
[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API?form=MG0AV3]MDN Web Docs: Canvas API

[https://www.oreilly.com/library/view/physics-for-game/9781449361037/?form=MG0AV3]Physics for Game Developers