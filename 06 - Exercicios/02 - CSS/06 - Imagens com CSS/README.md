# Exercício 6: Imagens com CSS

Enunciado: Adicione uma imagem ao HTML e estilize-a no CSS, ajustando seu tamanho e borda.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Imagens com CSS</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Imagem Estilizada</h1>
        <img src="imagem.jpg" alt="Descrição da Imagem" class="imagem">
    </body>
    </html>

```

## CSS
``` css
    /* Estiliza a imagem */
.imagem {
    width: 300px;
    border: 2px solid #000;
}

```