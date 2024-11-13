# Exercício 2: Estilizando Textos

Enunciado: Adicione uma tag <p> com algum texto no HTML e estilize o texto no CSS, mudando a cor, tamanho e fonte.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Estilizando Textos</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Olá, Mundo!</h1>
        <p>Este é um parágrafo estilizado com CSS.</p>
    </body>
    </html>
```

## CSS
``` css
/* Estiliza o texto do parágrafo */
p {
    color: #333;
    font-size: 16px;
    font-family: Arial, sans-serif;
}
```