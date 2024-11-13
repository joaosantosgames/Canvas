# Exercício 9: Formulário Estilizado (continuação)

Enunciado: Crie um formulário HTML com campos de texto e botões, e estilize-o no CSS.

## HTML:
``` html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Formulário Estilizado</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Formulário de Contato</h1>
        <form>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome">
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <br>
            <input type="submit" value="Enviar">
            <input type="reset" value="Resetar">
        </form>
    </body>
    </html>

```

## CSS
``` css
/* Estiliza o formulário */
form {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    width: 300px;
    margin: auto;
}

/* Estiliza os rótulos */
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

/* Estiliza os campos de entrada de texto e email */
input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Estiliza os botões de envio e reset */
input[type="submit"],
input[type="reset"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 4px;
}

input[type="submit"]:hover,
input[type="reset"]:hover {
    background-color: #0056b3;
}


```