# Exercício 8: Navegação com Menu Horizontal

Enunciado: Crie um menu de navegação horizontal usando listas no HTML e estilize-o no CSS.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Menu de Navegação</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Menu de Navegação</h1>
        <ul class="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </body>
    </html>
```

## CSS
``` css
    /* Estiliza o menu de navegação */
    .menu {
        list-style-type: none;
        padding: 0;
        display: flex;
        background-color: #333;
    }

    .menu li {
        margin: 0;
    }

    .menu a {
        display: block;
        padding: 10px 20px;
        color: white;
        text-decoration: none;
    }

    .menu a:hover {
        background-color: #111;
    }
```