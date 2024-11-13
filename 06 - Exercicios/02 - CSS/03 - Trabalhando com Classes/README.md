# Exercício 3: Trabalhando com Classes

Enunciado: Crie duas classes no CSS e aplique-as a diferentes elementos no HTML.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Trabalhando com Classes</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1 class="titulo">Título Principal</h1>
        <p class="texto-destaque">Parágrafo com destaque.</p>
        <p>Outro parágrafo sem classe.</p>
    </body>
    </html>
```

## CSS
``` css
    /* Estiliza o título principal */
    .titulo {
        color: #007bff;
        text-align: center;
    }

    /* Estiliza o parágrafo com destaque */
    .texto-destaque {
        color: #e63946;
        font-weight: bold;
    }
```