# Exercício 7: Listas Estilizadas

Enunciado: Crie listas ordenadas e não ordenadas no HTML e estilize-as no CSS.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Listas Estilizadas</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Minhas Listas</h1>
        <h2>Lista Não Ordenada</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <h2>Lista Ordenada</h2>
        <ol>
            <li>Primeiro</li>
            <li>Segundo</li>
            <li>Terceiro</li>
        </ol>
    </body>
    </html>   

```

## CSS
``` css
    /* Estiliza as listas */
    ul {
        list-style-type: square;
        color: #333;
    }

    ol {
        list-style-type: upper-roman;
        color: #007bff;
    }

```