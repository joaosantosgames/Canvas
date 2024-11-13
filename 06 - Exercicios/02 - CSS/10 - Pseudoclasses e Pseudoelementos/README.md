# Exercício 10: Pseudoclasses e Pseudoelementos

Enunciado: Crie uma página HTML que utilize pseudoclasses e pseudoelementos no CSS para estilizar elementos específicos.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Pseudoclasses e Pseudoelementos</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Pseudoclasses e Pseudoelementos</h1>
        <p class="paragrafo">Passe o mouse sobre este parágrafo.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <p>Este é outro parágrafo.</p>
    </body>
    </html>

```

## CSS
``` css
    /* Estiliza o parágrafo quando o mouse está sobre ele */
    .paragrafo:hover {
        background-color: #f0f0f0;
    }

    /* Adiciona conteúdo antes do parágrafo */
    .paragrafo::before {
        content: "Nota: ";
        font-weight: bold;
    }

    /* Estiliza o primeiro item da lista */
    ul li:first-child {
        color: red;
    }

    /* Estiliza o último parágrafo */
    p:last-of-type {
        color: blue;
    }

```